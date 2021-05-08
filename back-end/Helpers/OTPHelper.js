const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const randomizer = require('randomatic');



let ConcrteteSession

const generateOTP = (req) =>{

    var OTP = randomizer('0' , 5);
    ConcrteteSession = req.session;
    ConcrteteSession.OTP = OTP;
    console.log(ConcrteteSession);
    
    console.log(OTP);
    console.log(ConcrteteSession.OTP);

    return OTP;
}

module.exports.getOTP = generateOTP;
