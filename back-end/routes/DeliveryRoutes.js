const express = require('express')
const router = express.Router()
require('dotenv/config')

//importing models
const DeliveryItem = require('../models/Delivery')
var nodemailer = require('nodemailer');

router.get('/',async (req,res) =>{
    try{
        const items = await DeliveryItem.find()
        res.json(items)
    }catch(err){
        res.json({message : err})
    }
    
})

router.post('/',(req,res) =>{
    const item = new DeliveryItem({
        username : req.body.username,
        userId: req.body.userId,
        resName: req.body.resName,
        phone : req.body.phone,
        delAdd: req.body.delAdd,
        city: req.body.city,
        locType : req.body.locType,
        date: new Date(req.body.date),
        comments: req.body.comments,
        delCost:req.body.delCost,
        email:req.body.email,
        status: [req.body.status]

    })

    item.save().then(data =>{  
        res.json(data)
    }).catch(err =>{
        res.json(err)
    })

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: item.email,
        subject: 'Delivery reciept',
        text: 'Your order has ben places successfull on ' + item.date +'. TH total cost is Rs.' + item.delCost +'. Thank you for using our service.'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

router.get('/pending',async (req,res) =>{
    try{
        const items = await DeliveryItem.find()
        const array = [];
        items.forEach(item => {
            item.status[items.length - 1] !== 'Deliverd' ? array.push(item) : array.push()
        });
        res.json(array)
    }catch(err){
        res.json({message : err})
    }
    
})

router.patch('/:id',async (req,res) =>{
    try{
       const updatedPost =  await DeliveryItem.updateOne({_id:req.params.id}, {$set : {status : req.body.status}})
       res.json(updatedPost)
    }catch(err){
        res.json(err)
    }
})


module.exports = router;