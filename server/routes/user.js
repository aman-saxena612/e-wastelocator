import { location, login, register } from '../controllers/user.js';

import express from "express";
import { isAuthenticated } from '../middlewares/authorize.js';
const router=express.Router();

router.post('/register',register);

router.post("/login",login)

router.post("/location",isAuthenticated,location);





export default router;