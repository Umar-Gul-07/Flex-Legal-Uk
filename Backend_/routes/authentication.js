import express from 'express'
import login from '../controllers/authControllers.js';
import lawyerModel from '../models/lawyerModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/login', login)

// Debug route to check lawyer password (remove this after fixing the issue)
router.get('/debug-lawyer/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const lawyer = await lawyerModel.findOne({ email }).select('email password isLawyer');
    
    if (!lawyer) {
      return res.status(404).json({ message: 'Lawyer not found' });
    }
    
    res.json({
      email: lawyer.email,
      isLawyer: lawyer.isLawyer,
      hasPassword: !!lawyer.password,
      passwordLength: lawyer.password ? lawyer.password.length : 0,
      passwordStartsWith: lawyer.password ? lawyer.password.substring(0, 10) + "..." : "null"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to reset lawyer password (for debugging - remove after fixing)
router.post('/reset-lawyer-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    
    if (!email || !newPassword) {
      return res.status(400).json({ message: 'Email and newPassword are required' });
    }
    
    const lawyer = await lawyerModel.findOne({ email });
    if (!lawyer) {
      return res.status(404).json({ message: 'Lawyer not found' });
    }
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    lawyer.password = hashedPassword;
    await lawyer.save();
    
    res.json({ 
      success: true, 
      message: 'Password updated successfully',
      email: lawyer.email
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;