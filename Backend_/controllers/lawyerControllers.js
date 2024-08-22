import lawyerModel from '../models/lawyerModel.js';
import createError from '../utils/error.js';
import nodemailer from "nodemailer";
import bcrypt from 'bcrypt';
class LawyerController {

  // Send email===============================================
static sendVerifyEmail = async (firstName, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "umamaabd@gmail.com",
        pass: "eatcxpufvlgskjhw",
      },
    });

    const mailOptions = {
      from: "umamaabd@gmail.com",
      to: email,
      subject: "Verify Email",
      text: `Hello ${firstName}, please verify your email.`,
      html: `<p>Hello ${firstName}, please click <a href="http://192.168.1.8/verify?id=${user_id}">here</a> to verify your email.</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent:", info.response);
      }
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error.message);
  }
};




  //Registeration=============================================================
  static registerLawyer = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password, confirmPassword, cell, address, education, practiceArea, expertise } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: "Passwords do not match" });
      }

      const existingLawyer = await lawyerModel.findOne({ email });
      if (existingLawyer) {
        return res.status(400).json({ success: false, message: "The lawyer is already exist" });
      }

      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);

      const newLawyer = new lawyerModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        cell: cell,
        address: address,
        education: education,
        practiceArea: practiceArea,
        expertise:expertise,
      });

      await newLawyer.save();
      res.status(200).json({ success: true, message: "Lawyer has been created" });

    } catch (err) {
      next(err);
    }
  }



//mail verification===============================================
  static verifyMail = async (req, res) => {
    try {
      const updateInfo = await user.updateOne(
        { _id: req.query.id },
        { $set: { isVerified: 1 } }
      );
      console.log(updateInfo);
      res.render("email-verified");
    } catch (error) {
      console.log(error);
    }
  };



  // get===========================================================
  static getAllLawyers = async (req, res, next) => {
    try {
      console.log('all Data')
      // const query = address ? { address: { $regex: new RegExp(address, 'i') } } : {};
      // const result = await lawyerModel.find(query, { password: 0, isLawyer: 0 });
      const result = await lawyerModel.find()
  
      if (!result || result.length === 0) {
        return res.send("Sorry, no lawyer is available.");
      }
  
      res.status(200).json(result);
    } catch (err) {
      console.error('Error in getAllLawyers:', err); // Log errors
      next(createError(500, 'Internal Server Error'));
    }
  };
  


// search =======================================================
  static searchLawyersByAddress = async (req, res, next) => {
    try {
      const { data  } = req.body.params;
      console.log(data)

      if (!address) {
        return res.status(400).json({ success: false, message: 'Address parameter is missing' });
      }

      const result = await lawyerModel.find({ address: new RegExp(address, 'i') }, { password: 0, isLawyer: 0 });

      if (result.length === 0) {
        return res.status(404).json({ success: false, message: 'No lawyers found with the provided address' });
      }

      res.status(200).json(result);
    } catch (err) {
      next(createError(500, 'Internal Server Error'));
    }
  }


//edit lawyer==========================================================================
static editDoc = async (req, res) => {
  try {
    const result = await user.findById(req.params.id);
    res.render("edit", { data: result });
  } catch (error) {
    console.log(error);
  }
};

//update ============================================================================

static update = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const updateData = req.body;

    const result = await lawyerModel.findByIdAndUpdate(id, updateData, { new: true }); // { new: true } to return the updated document
    res
      .status(200)
      .json({ message: "Lawyer updated successfully", data: result });
  } catch (error) {
    next(error);
  }
};

static updatePassword = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const updateData = req.body;

    const foundLawyer = await lawyerModel.findById({ _id: id });

    if (!foundLawyer) {
      return next(createError(404, "Password not found"));
    }

    if (
      updateData.currentPassword &&
      updateData.newPassword &&
      updateData.confirmPassword
    ) {
      if (updateData.newPassword === updateData.confirmPassword) {
        const passwordMatch = await bcrypt.compare(
          updateData.currentPassword,
          foundLawyer.password
        );

        if (passwordMatch) {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(
            updateData.newPassword,
            saltRounds
          );
          foundLawyer.password = hashedPassword;  
          await foundLawyer.save();
          return res.status(200).json({
            message: "Password Updated Successfully",
            data: foundLawyer,
          });
        } else {
          return res.status(400).json({ message: "Current password is wrong" });
        }
      } else {
        return res
          .status(400)
          .json({ message: "New Password and Confirm Password do not match" });
      }
    } else {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    next(error);
  }
};




//Delete Accound============================================================
static deleteDocById = async (req, res) => {
  try {
    const result = await lawyerModel.findByIdAndDelete(req.params.id);
    res.redirect("/student");
  } catch (error) {
    next(error);
  }
};



//getLawyer====================================================
static getLawyer = async (req, res) => {
  try {
     const { lawyer } = req;

     if (!lawyer) {
      return res
        .status(404)
        .json({ success: false, message: "Lawyer not found" });
    }

     res.status(200).json({
      success: true,
      data: {
        firstName: lawyer.firstName,
        lastName: lawyer.lastName,
        email: lawyer.email,
       },
    });
  } catch (error) {
    console.error("Error fetching Lawyer data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//image ======================================================
static uploadImage = async (req, res) => {
  const image = req.file.path;
  const id = req.params.id.trim();
  console.log("hitt 2");

  if (image) {
    console.log(image);
    const id = req.params.id.trim();
    const foundLawyer = await lawyerModel.findById({ _id: id });

    if (!foundLawyer) {
      return next(createError(404, "Lawyer not found"));
    }

    foundLawyer.image = image;
    foundLawyer.save();
    console.log(foundLawyer);
    res.status(200).json({
      message: "Image uploaded successfully",
      data: foundLawyer,
    });
  } else {
    res.status(500).json({
      message: "Image upload failed",
    });
  }
}
}



export default LawyerController;
