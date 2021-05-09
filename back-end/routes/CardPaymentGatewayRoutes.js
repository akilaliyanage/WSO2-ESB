const express = require('express')
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

router.route("/:cardNo").get((req,res) => {

    let cNo = req.params.cardNo;
    
    CardPaymentGateway.find({cardNo:cNo})
    .then((CardPaymentGateway) => {

        if(req.params.cardNo == CardPaymentGateway.cardNo && req.params.cardHolderName == CardPaymentGateway.cardHolderName && req.params.CVC == CardPaymentGateway.CVC && req.params.expDate == CardPaymentGateway.expDate){
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
        }

        
        
    }).catch((error) => {
        console.log(error)
        res.statusCode = 404;
    })

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
        res.json(data)
    }).catch(err =>{
        res.json(err)
        console.log(err)
    })
})

module.exports = router;