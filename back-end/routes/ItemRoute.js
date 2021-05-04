const router = require('express').Router();
let Item = require("../models/Item");
const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,"./public/media")
    },
    filename:(req,file,callback) => {
        callback(null,file.originalname);
    }
})

const upload = multer({storage:storage});

router.post("/add",upload.single("image"),(req,res) => {


        const item = new Item({

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

module.exports = router;