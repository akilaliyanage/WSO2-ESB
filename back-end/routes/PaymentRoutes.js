const express = require('express')
const router = express.Router()

const Payment = require('../models/Payment')

router.get('/',async (req,res) =>{
    try{
        const transactions = await Payment.find()
        res.json(transactions)
    }catch(error){
        res.json({message : error})
    }
    
})

// router.route("/:cardNo").get((req,res) => {

//     let cNo = req.params.cardNo;
//     Payment.find({cardNo:cNo}).then((Payment) => {
//         res.json(Payment);
//     }).catch((error) => {
//         console.log(error)
//     })

// })

router.post('/',(req,res) =>{
    const transaction = new Payment({
        orderId: req.body.orderId,
        userId: req.body.userId,
        cardNo: req.body.cardNo,
        Ammount: req.body.Ammount,
        accNo: req.body.accNo,
        type: req.body.type
        
    })

    transaction.save().then(data =>{
        res.json(data)
    }).catch(error =>{
        res.json(error)
        console.log(error)
    })
})

module.exports = router;