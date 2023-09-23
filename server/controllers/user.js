import mongoose from "mongoose";
import { User } from "../models/User.js";
import { sendToken } from "../middlewares/sendToken.js";
import cloudinary  from 'cloudinary';
import getDataUri from "../middlewares/datauri.js";

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


export const location=async(req,res)=>{

 try {
  const user = await User.findById(req.user._id);
  
  const {lat,long}=req.body;
 
  user.lat=lat;
  user.long=long;

  await user.save();

  return res.status(200).send({
    message:"Location fetched",
    success: true,
  })

 } catch (error) {
  console.log(error);

  res.status(500).send({
    error: error.message,
    message: "Something went wrong",
    success: false,
  });
  
 }

}


export const imageUpload=async(req,res)=>{

  try {

    const file=req.file;
    
    const user=await User.findById(req.user._id)
    
    const fileUri=getDataUri(file);
    const myCloud=await cloudinary.v2.uploader.upload(fileUri.content);

    user.image={
      public_id:myCloud.public_id,
      url:myCloud.secure_url
    
    }
    await user.save(); 
    
      res.status(200).json({
        success:true,
        message:"Image Uploaded Successfully"
      })
    
  } catch (error) {
    console.log(error.message);
    
    res.status(500).send({
      error: error.message,
      message: "Something went wrong",
      success: false,
    });
  }
}