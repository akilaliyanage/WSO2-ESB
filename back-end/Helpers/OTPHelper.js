const express = require('express');
const randomizer = require('randomatic');

let ConcrteteSession

const generateOTP = (req) =>{

    var OTP = randomizer('0' , 5);
    req.session.OTP = OTP;
    req.session.save();

    console.log("OTP session is",  req.session.OTP);

    return Promise.resolve(OTP);
}

module.exports.getOTP = generateOTP;
