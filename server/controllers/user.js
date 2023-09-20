import mongoose from "mongoose";
import { User } from "../models/User.js";
import { sendToken } from "../middlewares/sendToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(404).send({
        message: "Please Enter all the required fields",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).send({
        message: "User already registered",
        success: true,
      });
    }

    user = await User.create({
      name,
      email,
      password,
      phone,
    });

    sendToken(res, user, "Registered Successfully", 201);
  } catch (error) {
    res.status(500).send({
      error: error,
      message: "Something went wrong",
      success: false,
    });
  }
};


export const login = async(req, res) => {

 try {

  const {email, password} = req.body;
  if(!email || !password) {

   return res.status(403).send({
    success: false,
    message: "Please Enter all the required fields",
   })
  }

  let user=await User.findOne({email});
  if(!user){
   return res.status(403).send({
    success: false,
    message: "User not found",
   })
  }

  const isMatch=await user.comparePassword(password);
  if(!isMatch){
   return res.status(403).send({
    success: false,
    message:"Invalid email or password",
   })
  }

  sendToken(res, user, `Welcome back, ${user.name}`, 200);

  
 } catch (error) {
  res.status(500).send({
   error: error,
   message: "Something went wrong",
   success: false,
 });
 }

}