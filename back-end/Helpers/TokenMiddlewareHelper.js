const express = require('express')
const jwt = require('jsonwebtoken');

function authToken(req , res , next){
    console.log('called auth')
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(403)

    jwt.verify(token , '2342230178054578' , (err , OTP) => {
        if(err) return res.sendStatus(403)
        console.log('OTP :', OTP )
        req.OTP = OTP
        next()
    })
}

module.exports = authToken;