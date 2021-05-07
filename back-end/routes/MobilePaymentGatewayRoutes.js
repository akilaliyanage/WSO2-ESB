const express = require('express')
const router = express.Router()

const MobilePaymentGateway = require('../models/MobilePaymentGateway')

router.get('/',async (req,res) =>{
    try{
        const entries = await MobilePaymentGateway.find()
        res.json(entries)
    }catch(error){
        res.json({message : error})
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