import express from 'express'
import upload from '../controllers/multer.js';

import lawyerController from '../controllers/lawyerControllers.js';

import { emailAndPasswordValidation , validate } from '../utils/Validations.js';

const router = express.Router();

router.get('/search', lawyerController.searchLawyersByAddress)
router.get('/verify', lawyerController.verifyMail)
router.get('/get_all_attorney', lawyerController.getAllLawyers)
router.get('/getUser/:id', lawyerController.getLawyer)
router.post('/register', emailAndPasswordValidation, validate, lawyerController.registerLawyer);  
router.delete('/delete/:id',  lawyerController.deleteDocById);  
 
router.patch('/update/:id', upload.single('image'), lawyerController.updateLawyerWithImage);

router.patch('/change-password/:id', lawyerController.updatePassword)

export default router;