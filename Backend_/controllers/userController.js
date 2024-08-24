import user from "../models/userModel.js";
import createError from "../utils/error.js";
import bcrypt from 'bcrypt';

class UserController {

  static register = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password, confirmPassword } = req.body;

      // Check if the passwords match
      if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords does not match" });
      }

      const existingUser = await user.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, errors: [{ msg: 'Email is already registered. Please use a different email.' }] });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new user({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        confirmPassword: hashedPassword
      });

      const result = await newUser.save();
      res.status(200).json({ success: true, message: "User has been created" });
    } catch (err) {
      next(err);
    }
  }

  static getAllUsers = async (req, res, next) => {
    try {
      const result = await user.find()

      if (!result || result.length === 0) {
        return res.status(404).json({message:"Sorry, no lawyer is available."});
      }
      res.status(200).json(result);
    } catch (err) {
      console.error('Error in getAllLawyers:', err); // Log errors
      next(createError(500, 'Internal Server Error'));
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await user.findByIdAndDelete(req.params.id);
      res.redirect("/student");
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
