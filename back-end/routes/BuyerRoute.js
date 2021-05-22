const router = require('express').Router();
let Item = require("../models/Item");


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

module.exports = router;