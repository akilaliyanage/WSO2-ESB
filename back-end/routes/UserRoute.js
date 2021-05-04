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

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    if (req.body.role === "seller") {

        const auth = Seller.findOne(req.body.email);

        if (auth) {

            return res.status(400);
        } else {


            const user = new Seller({

                username: req.body.username,
                email: req.body.email,
                hashedPassword: hashedPassword,
                profileImg: req.file.originalname
            });

            user.save().then(() => {
                res.json({status: 200})
            }).catch((err) => {
                console.log(err);
            })
        }

    } else if (req.body.role === "buyer") {

        const auth = Seller.findOne(req.body.email);

        if (auth) {

            return res.status(400);

        } else {

            const user = new Buyer({

                username: req.body.username,
                email: req.body.email,
                hashedPassword: hashedPassword,
                profileImg: req.file.originalname
            });

            user.save().then(() => {
                res.json({status: 200})
            }).catch((err) => {
                console.log(err);
            })

        }
    }


})

router.post("/seller-login",async (req,res) =>{

    try {

        const {username, password} = req.body;
        const validUser = await Seller.findOne({username:username});

        if(validUser && bcrypt.compareSync(password, validUser.hashedPassword)){

            return res.status(200).json({Message:"user found!"})
        }

        else {
            return  res.status(400);
        }

    }
    catch (err){

        console.warn(err);
    }



})

module.exports = router;