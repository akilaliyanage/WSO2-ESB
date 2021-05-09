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
        OTPHelper.getOTP(req)
        .then((otp) => {
            EmailHelper('dhmmpthammita@gmail.com' , otp)
            .then((status) =>{
                res.json(CardPaymentGateway) 
            })
            .catch((error) =>{
                console.log(error)
            })
        })
        .catch((error) =>{
            console.log(error)
        })
        
    }).catch((error) => {
        console.log(error)
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