import jwt from "jsonwebtoken";
import { User } from "../models/User.js";



export const isAuthenticated = async (req, res, next) => {
 try {
  
  const { token } = req.cookies;

 if (!token){
   return res.status(401).send({
    message: "Not Logged In",
    success: false
   })
 } 

 const decoded = jwt.verify(token, process.env.JWT_SECRET);

 req.user = await User.findById(decoded._id);

 next();

 } catch (error) {
  console.log(error.message);
  res.status(500).send({
   error: error,
   message: "Something went wrong",
   success: false,
 });
  
 }
};
