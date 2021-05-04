const router = require('express').Router();
let Seller = require("../models/Seller");
let Buyer = require("../models/Buyer");
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

router.post("/signup",upload.single("picture"),(req,res) => {

    if (req.body.role === "seller"){

        const user = new Seller({

            username : req.body.username,
            email:  req.body.email,
            password: req.body.password,
            profileImg: req.file.originalname
        });

        user.save().then(() => {
            res.json({status:200})
        }).catch((err) =>{
            console.log(err);
        })

    }

    else if (req.body.role === "buyer"){

        const user = new Buyer({

            username :   req.body.username,
            email:  req.body.email,
            password: req.body.password,
            profileImg: req.file.originalname
        });

        user.save().then(() => {
            res.json({status:200})
        }).catch((err) =>{
            console.log(err);
        })

    }


})

module.exports = router;