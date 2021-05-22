const express = require('express')
const router = express.Router()

const Item = require('../models/Item')
const cartItems = require('../models/CartItems')

//get all items
router.get('/',async (req,res) =>{
    try{
        const items = await Item.find()
        res.json(items)
    }catch(err){
        res.json({message : err})
    }
    
}),

//saving cart details in the database
router.post('/',async (req,res) =>{

    const items2 = new cartItems({

        items: req.body.items,
        total: req.body.total,
        buyerId:req.body.buyerId

    });

    // const response = 
    items2.save(function(err,cart) {
        console.log(cart);

        const id = {
            id : cart['_id']
        }
        console.log(id)
        res.json(JSON.stringify(cart['_id']))
     })
    // items2.save().then(data =>{res.send(data)}).catch((err) => {res.json(err)})

})

module.exports = router;