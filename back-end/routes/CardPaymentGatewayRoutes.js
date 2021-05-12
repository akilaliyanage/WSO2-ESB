const express = require('express')
const jwt = require('jsonwebtoken');

const router = express.Router()

const CardPaymentGateway = require('../models/CardPaymentGateway')
const EmailHelper = require('../Helpers/EmailHelper')
const OTPHelper = require('../Helpers/OTPHelper')
const authToken = require('../Helpers/TokenMiddlewareHelper')



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
                EmailHelper(req.body.email , otp)
                .then((status) =>{
                    console.log('Card Matched');
                    const cardNo = req.params.cardNo;
                    const OTPToken = jwt.sign(otp , cardNo);
                    res.statusCode = 200;
                    res.json({CardPaymentGateway:CardPaymentGateway , Token: OTPToken}) ;
                })
                .catch((error) =>{
                    console.log(error)
                })
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