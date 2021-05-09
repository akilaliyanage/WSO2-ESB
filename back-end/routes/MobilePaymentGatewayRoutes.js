const express = require('express')
const router = express.Router()

const MobilePaymentGateway = require('../models/MobilePaymentGateway');
const EmailHelper = require('../Helpers/EmailHelper');
const OTPHelper = require('../Helpers/OTPHelper');

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
        OTPHelper.getOTP(req)
        .then((otp) => {
            EmailHelper('mahendra.parackramathammita@gmail.com' , otp)
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
        res.json(MobilePaymentGateway);
    }).catch((error) => {
        console.log(error)
    })

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