const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');

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
    console.log('type : ' , req.body.type);
    console.log('userId : ' , req.body.userId);
    console.log('cardNo : ' , req.body.cardNo);
    console.log('Ammount : ' , req.body.Ammount);

    transaction.save()
    .then(data =>{
        if(req.body.isMobile == true)
        {
                

                const SMSServiceAPI = 'http://172.18.0.1:8280/payment/sms';
                const ApiBody = {toNumber:req.body.mobileNo , message : " Use have made the payment through mobile payments \n Order : "+ req.body.orderId +" \n Ammount =  "+ req.body.Ammount + "$", type : "PAYMENT" }
                const ApiHeaders = {'Content-Type': 'application/json'}

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
                            res.json(data) ;
                            res.send();
                        })
                        .catch(e => console.log('json Error : ' , e))
                    }
                    else{
                        console.log("SMS Service Error (SMS Service)");
                        res.json(data)
                        res.statusCode = 400;
                        res.send();
                    }
                    
                })
                .catch(err => {
                    console.log("SMS Service Error (3Rd party) : " , err);
                    res.json(data)
                    res.statusCode = 400;
                    res.send();
                })
        }
        else
        {
                const EmailServiceAPI = 'http://172.18.0.1:8280/payment/email';
                const ApiBody = {toAddress:req.body.email , message : " you have made the payment through card payments" , type : "PAYMENT" , Ammount : req.body.Ammount , orderId : req.body.orderId }
                const ApiHeaders = {'Content-Type': 'application/json'}

                const ApiOptions = {
                    "method": "POST",
                    "headers": ApiHeaders,
                    "body": JSON.stringify(ApiBody)
                }
                fetch(EmailServiceAPI , ApiOptions)
                .then(SMSRes => {
                    if(SMSRes.status == 200){
                        SMSRes.json()
                        .then(SMSresult => {
                            console.log(SMSresult)
                            console.log('Email Sent');
                            res.statusCode = 200;
                            res.json(data);
                            res.send();
                        })
                        .catch(e => console.log('json Error : ' , e))
                    }
                    else{
                        console.log("Email Service Error (Email Service)");
                        res.statusCode = 400;
                        res.json(data)
                        res.send();
                    }
                    
                })
                .catch(err => {
                    console.log("Email Service Error (3Rd party) : " , err);
                    res.statusCode = 400;
                    res.json(data)
                    res.send();
                })
        }
        
    })
    .catch(error =>{
        res.statusCode = 400;
        res.json(error)
        console.log(error)
    })
})

module.exports = router;