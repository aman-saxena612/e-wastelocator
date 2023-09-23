import { imageUpload, location, login, register } from '../controllers/user.js';

import express from "express";
import { isAuthenticated } from '../middlewares/authorize.js';
import singleUpload from './../middlewares/multer.js';


const router=express.Router();

router.post('/register',register);

router.post("/login",login)

router.post("/location",isAuthenticated,location);

router.post("/imgUpload",singleUpload,isAuthenticated,imageUpload);





export default router;