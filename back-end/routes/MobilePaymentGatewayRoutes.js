const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');
require('dotenv').config();

const TokenPrifix = process.env.OTP_TOKEN_PREFIX;
const TokenSuffix = process.env.OTP_TOKEN_SUFFIX;

const OTPHelper = require('../Helpers/OTPHelper')
const authToken = require('../Helpers/TokenMiddlewareHelper')

router.get('/',async (req,res) =>{
    try{
        const entries = await MobilePaymentGateway.find()
        res.json(entries)
    }catch(error){
        res.json({message : error})
    }
    
})

router.route("/:mobileNo").get((req,res) => {

    let No = req.params.mobileNo;

    MobilePaymentGateway.find({mobileNo:No})
    .then((MobilePaymentGateway) => {
        if(MobilePaymentGateway.length != 1){
            res.statusCode = 404;
            res.send();
        }
        else if(req.params.mobileNo == MobilePaymentGateway[0].mobileNo && req.body.accNo == MobilePaymentGateway[0].accNo && req.body.NIC == MobilePaymentGateway[0].NIC && req.body.accHolderName == MobilePaymentGateway[0].accHolderName){
            OTPHelper.getOTP(req)
            .then((otp) => {
                const mobileNo = req.params.cardNo;
                let OTPKey = TokenPrifix + mobileNo + req.body.accNo + TokenSuffix;
                //Create a JWT(JSON Web Token) for the OTP. Therefor OTP will send in an encrypted formt
                // to the client/Email service or the SMS service.
                const OTPToken = jwt.sign(otp , OTPKey);

                const SMSServiceAPI = 'http://localhost:9002';
                const ApiBody = {data:MobilePaymentGateway , message : "Use Your OTP " , type : "OTP" }
                const ApiHeaders = {'Content-Type': 'application/json' , 'Authorization': "OTPToken " + OTPToken,}

                const ApiOptions = {
                    "method": "POST",
                    "headers": ApiHeaders,
                    "body": JSON.stringify(ApiBody)
                }
                fetch(SMSServiceAPI , ApiOptions)
                .then(SMSRes => {
                    if(SMSRes.status == 200){
                        SMSRes.json()
                        .then(SMSresult => {
                            console.log(SMSresult)
                            console.log('SMS Sent');
                            res.statusCode = 200;
                            res.json({MobilePaymentGateway:MobilePaymentGateway , Token: OTPToken}) ;
                            res.send();
                        })
                        .catch(e => console.log('json Error : ' , e))
                    }
                    else{
                        console.log("SMS Service Error (SMS Service)");
                        res.statusCode = 400;
                        res.send();
                    }
                    
                })
                .catch(err => {
                    console.log("SMS Service Error (3Rd party) : " , err);
                    res.statusCode = 400;
                    res.send();
                })

                // SMSHelper('+94716292892' , otp)
                // .then((status) =>{
                //     console.log('Mobile No matched: Valid User');
                //     res.statusCode = 200;
                //     res.json(MobilePaymentGateway) 
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
            res.json(MobilePaymentGateway); 
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

router.post('/',(req,res) =>{
    const entry = new MobilePaymentGateway({
        accHolderName: req.body.accHolderName,
        mobileNo: req.body.mobileNo,
        accNo: req.body.accNo,
        NIC: req.body.NIC,
        email: req.body.email        
    })

    entry.save().then(data =>{
        res.json(data)
    }).catch(error =>{
        res.json(error)
        console.log(error)
    })
})

module.exports = router;