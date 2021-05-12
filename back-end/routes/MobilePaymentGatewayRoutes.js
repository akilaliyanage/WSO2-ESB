const express = require('express')
const router = express.Router()

const MobilePaymentGateway = require('../models/MobilePaymentGateway');
const SMSHelper = require('../Helpers/SMSHelper');
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
        if(req.params.mobileNo == MobilePaymentGateway[0].mobileNo && req.body.accNo == MobilePaymentGateway[0].accNo && req.body.NIC == MobilePaymentGateway[0].NIC && req.body.accHolderName == MobilePaymentGateway[0].accHolderName){
            OTPHelper.getOTP(req)
            .then((otp) => {
                SMSHelper('+94716292892' , otp)
                .then((status) =>{
                    console.log('Mobile No matched: Valid User');
                    res.statusCode = 200;
                    res.json(MobilePaymentGateway) 
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