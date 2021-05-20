const express = require('express')
const app = express()
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const authToken = require('./Helpers/TokenMiddlewareHelper');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', authToken , (req , res) => {
    //Configuring the message to be sent
    let message = null;

    switch(req.body.type){
        case "OTP":
            message = {
                to: req.body.data[0].email,
                from: 'mahendra.testprojects@gmail.com',
                subject: 'Lorem-E-Shop - OTP',
                text: 'Your OTP For Payment is : ' + req.OTP,
                html: '<h1>'+ req.body.message +' : '+ req.OTP +'  </h1>'
            }
            break;
        case "PAYMENT":
            message = {
                to: req.body.toAddress,
                from: 'mahendra.testprojects@gmail.com',
                subject: 'Lorem-E-Shop - Payment Confirmation',
                text: 'Payment Made to Lorem-E-Shop : Order No : ' + req.body.orderId + ' , Ammount :  '  + req.body.Ammount,
                html: '<div><h1> Payment Confirmation for order '+req.body.orderId+'</h1><h3>'+ req.body.message +'</h3> <h2> Ammount = $'+ req.body.Ammount +'</h2> </div>'
            }
            break;
        default:
            console.log('Not a matching type')
            res.statusCode = 400;
            res.json({status : true , SGResponse : this.mailResponse});
            res.send();
        
    }

    
    //Send email using Sendgrid 3rd party Email Library.
    sgMail.send(message)
    .then((response) => {
        console.log('Email Sent...');
        this.mailResponse = response;
        res.statusCode = 200;
        res.json({status : true , SGResponse : this.mailResponse});
        res.send();
    })
    .catch((err) => {
         console.log('Email Error : ' , err.message);
         this.mailResponse = err;
         res.statusCode = 400;
         res.json({status : true , SGResponse : this.mailResponse});
         res.send();
    });
})

console.log("Email Service Started...")
app.listen(9001)
