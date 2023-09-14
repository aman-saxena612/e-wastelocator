import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require:true,
    },

    phone:{
        type: Number,
        require: true,
        
    },

    lat:{
        type: String,
        // require: true
    },

    long:{
        type: String,
        // require: true
    }

},
{timestamps: true}
);


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  UserSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
  };
  
  UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

export const User = mongoose.model('user', UserSchema);