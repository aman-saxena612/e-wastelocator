const express = require("express");
const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    phone:{
        type: Number,
        require: true,
        min: 10,
        max: 10
    },

    lat:{
        type: Number,
        require: true
    },

    long:{
        type: Number,
        require: true
    }

},
{timestamps: true}
);

module.exports = mongoose.model('user', User);