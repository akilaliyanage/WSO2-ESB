const express = require('express');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
require('dotenv').config();
const TokenPrifix = process.env.OTP_TOKEN_PREFIX;
const TokenSuffix = process.env.OTP_TOKEN_SUFFIX;
const router = express.Router();

const CardPaymentGateway = require('../models/CardPaymentGateway');
const OTPHelper = require('../Helpers/OTPHelper');
const authToken = require('../Helpers/TokenMiddlewareHelper');



router.get('/',async (req,res) =>{
    try{
        const cards = await CardPaymentGateway.find()
        res.json(cards)
    }catch(error){
        res.json({message : error})
    }
    
})

router.route("/:cardNo").post((req,res) => {

    let cNo = req.params.cardNo;
    console.log('inside Post');
    
    CardPaymentGateway.find({cardNo:cNo})
    .then((CardPaymentGateway) => {
        if(CardPaymentGateway.length != 1){
            res.statusCode = 404;
            res.send();
        }
        else if(req.params.cardNo == CardPaymentGateway[0].cardNo && req.body.cardHolderName == CardPaymentGateway[0].cardHolderName && req.body.CVC == CardPaymentGateway[0].CVC && req.body.expDate == CardPaymentGateway[0].expDate){
            
            OTPHelper.getOTP(req)
            .then((otp) => {
                const cardNo = req.params.cardNo;
                let OTPKey = TokenPrifix + cardNo + req.body.CVC + TokenSuffix;
                //Create a JWT(JSON Web Token) for the OTP. Therefor OTP will send in an encrypted formt
                // to the client/Email service or the SMS service.
                const OTPToken = jwt.sign(otp , OTPKey);

                const EmailServiceAPI = 'http://localhost:9001';
                const ApiBody = {data:CardPaymentGateway , message : "Use Your OTP " , type : "OTP" }
                const ApiHeaders = {'Content-Type': 'application/json' , 'Authorization': "OTPToken " + OTPToken,}
            
                const ApiOptions = {
                    "method": "POST",
                    "headers": ApiHeaders,
                    "body": JSON.stringify(ApiBody)
                }
                fetch(EmailServiceAPI , ApiOptions)
                .then(EmailRes => {
                    if(EmailRes.status == 200){
                        EmailRes.json()
                        .then(Emaailresult => {
                            console.log(Emaailresult)
                            console.log('Email Sent');
                            res.statusCode = 200;
                            res.json({CardPaymentGateway:CardPaymentGateway , Token: OTPToken}) ;
                            res.send();
                        })
                        .catch(e => console.log('json Erroe : ' , e))
                    }
                    else{
                        console.log("Email Service Error (Email Service)");
                        res.statusCode = 400;
                        res.send();
                    }
                    
                })
                .catch(err => {
                    console.log("Email Service Error (3Rd party) : " , err);
                    res.statusCode = 400;
                    res.send();
                })
                // EmailHelper(CardPaymentGateway[0].email , otp)
                // .then((status) =>{
                //     console.log('Card Matched');
                //     const cardNo = req.params.cardNo;

                //     //Create a JWT(JSON Web Token) for the OTP. Therefor OTP will send in an encrypted formt
                //     // to the client/Email service or the SMS service.
                //     const OTPToken = jwt.sign(otp , cardNo);
                //     res.statusCode = 200;
                //     res.json({CardPaymentGateway:CardPaymentGateway , Token: OTPToken}) ;
                // })
                // .catch((error) =>{
                //     console.log(error)
                // })
            })
            .catch((error) =>{
                console.log(error)
            })
        }
        else{
            console.log('Mismatch entries');
            res.statusCode = 404;
            res.json(CardPaymentGateway); 
        }
        
    }).catch((error) => {
        console.log(error)
        res.statusCode = 404;
    })

})

router.post('/checkOTP/confirmation', authToken ,(req,res) => {

    try {
        console.log('Body OTP is :' , req.body.OTP);
        
        if(req.body.OTP == req.OTP){
            console.log("OTP Matched.");
            console.log('req.OTP is :' , req.OTP);
            console.log('req.body.OTP is :' , req.body.OTP);
            res.statusCode = 200;
            res.json(true);
        }
        else{
            res.statusCode = 400;
            res.json(false);
        }
        
    } catch (error) {
        console.log(error);
    }
    
})

router.post('/',  (req,res) =>{
    const card = new CardPaymentGateway({
        cardHolderName: req.body.cardHolderName,
        cardNo: req.body.cardNo,
        CVC: req.body.CVC,
        type: req.body.type,
        expDate: req.body.CVC,
        email: req.body.email,
        phone: req.body.phone
        
    })

    card.save().then(data =>{
        console.log('Data Saved');
        res.json(data)
    }).catch(err =>{
        res.json(err)
        console.log(err)
    })
})

module.exports = router;