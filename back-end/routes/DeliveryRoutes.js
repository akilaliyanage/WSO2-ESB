const express = require('express')
const router = express.Router()

//importing models
const DeliveryItem = require('../models/Delivery')

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
        itemCode:req.body.itemCode,
        email:req.body.email,
        status: [req.body.status]

    })

    item.save().then(data =>{
        res.json(data)
    }).catch(err =>{
        res.json(err)
    })
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