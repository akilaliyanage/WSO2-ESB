const express = require('express')
const session = require('express-session');
//const bodyParser = require('body-parser');

const router = express.Router()

const CardPaymentGateway = require('../models/CardPaymentGateway')
const EmailHelper = require('../Helpers/EmailHelper')
const OTPHelper = require('../Helpers/OTPHelper')



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
    
    
    CardPaymentGateway.find({cardNo:cNo})
    .then((CardPaymentGateway) => {
        if(CardPaymentGateway.length != 1){
            res.statusCode = 404;
            res.json(CardPaymentGateway); 
        }
        else if(req.params.cardNo == CardPaymentGateway[0].cardNo && req.body.cardHolderName == CardPaymentGateway[0].cardHolderName && req.body.CVC == CardPaymentGateway[0].CVC && req.body.expDate == CardPaymentGateway[0].expDate){
            OTPHelper.getOTP(req)
            .then((otp) => {
                EmailHelper('dhmmpthammita@gmail.com' , otp)
                .then((status) =>{
                    console.log('Card Matched');
                    res.statusCode = 200;
                    res.json(CardPaymentGateway) 
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

router.post('/checkOTP/confirmation', async (req,res) => {

    try {
        
        console.log('Body OTP is :' , req.body.OTP);
        let OTPSession;
        OTPSession = req.session.OTP;

        console.log('Session is :' , req.session.OTP);
        
        if(req.body.OTP == OTPSession){
            console.log("OTP Matched.")
            req.session.destroy();
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