const express = require('express')
const jwt = require('jsonwebtoken');

//This function will us as an middleware to decrypt and autherize the JWT.
function authToken(req , res , next){
    console.log('called auth')

    //retrieve the token from headred and filter it by remobving unnecessary texts.
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(403)

    //Decrypt the token with using the given key.
    jwt.verify(token , '2342230178054578' , (err , OTP) => {
        if(err) return res.sendStatus(403)
        console.log('OTP :', OTP )
        req.OTP = OTP
        next()
    })
}

module.exports = authToken;