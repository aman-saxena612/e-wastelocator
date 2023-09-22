const express = require("express");
const mongoose = require("mongoose");

const Place = new mongoose.Schema({
    lat:{
        type:Number,
        require: true
    },

    long:{
        type: Number,
        require: true
    },

    place:{
        type: String,
        require: true
    }
},{timestamps: true}
);

module.exports = mongoose.model('place', Place);
