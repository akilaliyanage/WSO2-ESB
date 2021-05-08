const router = require('express').Router();
let Item = require("../models/Item");
const multer = require("multer");
const Seller = require("../models/Seller");

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,"./uploads")
    },
    filename:(req,file,callback) => {
        callback(null,file.originalname);
    }
})


//uploading images
const upload = multer({storage:storage});

router.post("/add",upload.single("image"),(req,res) => {

        const item = new Item({

            sellerID: req.body.sellerID,
            title : req.body.title,
            description:  req.body.description,
            itemCount: req.body.count,
            price: req.body.price,
            itemImage: req.file.originalname
        });

        item.save().then(() => {
            res.json({status:200})
        }).catch((err) =>{
            console.log(err);
        })

})

//getting seller's items
router.route("/:sellerID").get((req,res) => {

    let ID = req.params.sellerID;


    Item.find({sellerID:ID}).then((items) => {

        Item.countDocuments({sellerID:ID}, function(err, c) {
            console.log('Count is ' + c);
            let itemCount = c;
            return c;
        }).then((c) => {

            res.json({items,c});
        })



    }).catch((err) => {
        console.log(err)
    })



})

//get one item
router.route("/:sellerID/:itemID").get((req,res) => {

    let itemID = req.params.itemID;

    Item.find({_id:itemID}).then((items) => {
        res.json(items)
    }).catch((err) => {
        console.log(err)
    })

})

//get all items
router.route("/").get((req,res) => {
    Item.find().then(
      (items) => {
        res.status(200).json(items);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
});





//update item
router.put("/update/:itemID",upload.single("image"),async (req,res) => {

    const itemID = req.params.itemID;
    let updatedItem;

    if (!req.file){

        updatedItem = {

            title : req.body.title,
            description:  req.body.description,
            itemCount: req.body.count,
            price: req.body.price,

        };
    }
    else {
        updatedItem = {

            title : req.body.title,
            description:  req.body.description,
            itemCount: req.body.count,
            price: req.body.price,
            itemImage: req.file.originalname
        };
    }

    const  updateValue = await  Item.findByIdAndUpdate(itemID,updatedItem).then(() => {

        res.json({status:200});
    }).catch((err) => {
        console.log(err)
    })

})

//delete an item
router.route("/delete/:itemID").delete(async (req,res) =>{

    let itemID = req.params.itemID;
    await Item.findByIdAndDelete(itemID).then(() => {
        res.json({status:200});
    }).catch((err) => {
        console.log(err);

    })

})
module.exports = router;