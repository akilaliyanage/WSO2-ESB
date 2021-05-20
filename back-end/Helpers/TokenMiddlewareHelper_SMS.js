const express = require('express')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const TokenPrifix = process.env.OTP_TOKEN_PREFIX;
const TokenSuffix = process.env.OTP_TOKEN_SUFFIX;

//This function will us as an middleware to decrypt and autherize the JWT.
function authToken(req , res , next){
    console.log('called auth for SMS')

    //retrieve the token from headred and filter it by remobving unnecessary texts.
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(403)
    console.log('Passes')
    let OTPKey = TokenPrifix + req.body.data[0].mobileNo + req.body.data[0].accNo + TokenSuffix;
    //Decrypt the token with using the given key.
    jwt.verify(token , OTPKey , (err , OTP) => {
        if(err) return res.sendStatus(403)
        console.log('OTP :', OTP )
        req.OTP = OTP
        next()
    })
}

module.exports = authToken;