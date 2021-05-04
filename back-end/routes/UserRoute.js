const router = require('express').Router();
let Seller = require("../models/Seller");
let Buyer = require("../models/Buyer");
const multer = require("multer");
const bcrypt = require("bcrypt");

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,"./public/media")
    },
    filename:(req,file,callback) => {
        callback(null,file.originalname);
    }
})

const upload = multer({storage:storage});

router.post("/signup",upload.single("picture"),async (req, res) => {


    if (req.body.role === "seller") {

            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(req.body.password,salt);
            const user = new Seller({

                username: req.body.username,
                email: req.body.email,
                password: hash,
                profileImg: req.file.originalname
            });

            user.save().then(() => {
                res.json({status: 200})
            }).catch((err) => {
                console.log(err);
            })


    } else if (req.body.role === "buyer") {

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(req.body.password,salt);

            const user = new Buyer({

                username: req.body.username,
                email: req.body.email,
                password: hash,
                profileImg: req.file.originalname
            });

            user.save().then(() => {
                res.json({status: 200})
            }).catch((err) => {
                console.log(err);
            })


    }


})

router.post("/seller-login",async (req,res) =>{

    try {

        let username = req.body.username;
        let password = req.body.password;

        const user = await Seller.findOne({"username":username});

        if (user) {

            const auth = await bcrypt.compare(password, user.password);
            console.log(auth);

            if (auth===false) {
                res.json("invalid credentials!");

            } else {
                res.json({user,status:200});
            }

        }

        else {
            return res.status(404).json("User Not Found!");
        }

    }
    catch (err){

        console.log(err);
    }

})

router.post("/buyer-login",async (req,res) =>{

    try {

        let username = req.body.username;
        let password = req.body.password;

        const user = await Buyer.findOne({"username":username});

        if (user) {

            const auth = await bcrypt.compare(password, user.password);
            console.log(auth);

            if (auth===false) {
                res.json("invalid credentials!");

            } else {
                res.json({user,status:200});
            }

        }

        else {
            return res.status(404).json("User Not Found!");
        }

    }
    catch (err){

        console.log(err);
    }



})


module.exports = router;