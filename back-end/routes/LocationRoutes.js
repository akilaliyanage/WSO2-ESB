const express = require('express')
const router = express.Router()

//importing models
const LocationModel = require('../models/Location')

router.get('/',async (req,res) =>{
    try{
        const items = await LocationModel.find()
        res.json(items)
    }catch(err){
        res.json({message : err})
    }
    
})

router.post('/',(req,res) =>{
    const item = new LocationModel({
        location : req.body.location,
        province: req.body.province,
        cost: req.body.cost,
        isDeliver : req.body.isDeliver

    })

    item.save().then(data =>{
        res.json(data)
    }).catch(err =>{
        res.json(err)
    })
})

module.exports = router;