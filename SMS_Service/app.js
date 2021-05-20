const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const twilio = require('twilio');
const authToken = require('./Helpers/TokenMiddlewareHelper');
require('dotenv').config();

const twilioSid = process.env.TWILIO_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
var senderNO = process.env.PHONE_NO;

var client = new twilio(twilioSid , twilioAuthToken);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', authToken , (req , res) => {
    //Configuring the message to be sent
    let message = null;
    let toNumber = req.body.data[0].mobileNo;

    switch(req.body.type){
        case "OTP":
                client.messages.create({
                    body: req.body.message + ' : ' + req.OTP,
                    to: toNumber,
                    from: senderNO,
                })
                .then((message) => {
                    console.log('SMS Sent...');
                    console.log(message);
                    this.smsResponse = message;
                    res.statusCode = 200;
                    res.json({status : true , TWResponse : this.smsResponse});
                    res.send();
                })
                .catch((error) => {
                    console.log('SMS Error : ' , error);
                    this.smsResponse = error;
                    res.statusCode = 400;
                    res.json({status : true , TWResponse : this.smsResponse});
                    res.send();
                })
            break;
        case "PAYMENT":
                client.messages.create({
                    body: 'Payment Made '  + req.body.message + ' : ' + req.OTP,
                    to: toNumber,
                    from: senderNO,
                })
                .then((message) => {
                    console.log('SMS Sent...');
                    console.log(message);
                    this.smsResponse = message;
                    res.statusCode = 400;
                    res.json({status : true , TWResponse : this.smsResponse});
                    res.send();
                })
                .catch((error) => {
                    console.log('SMS Error : ' , error);
                    console.log('SMS Error : ' , error);
                    this.smsResponse = error;
                    res.statusCode = 400;
                    res.json({status : true , TWResponse : this.smsResponse});
                    res.send();
                })
            break;
        default:
            console.log('Not a matching type')
            res.statusCode = 400;
            //res.json({status : true , SGResponse : this.mailResponse});
            res.send();
        
    }

    
    //Send SMS using Twilio 3rd party SMS Library.
    // sgMail.send(message)
    // .then((response) => {
    //     console.log('SMS Sent...');
    //     this.mailResponse = response;
    //     res.statusCode = 200;
    //     res.json({status : true , SGResponse : this.mailResponse});
    //     res.send();
    // })
    // .catch((err) => {
    //      console.log('SMS Error : ' , err.message);
    //      this.mailResponse = err;
    //      res.statusCode = 400;
    //      res.json({status : true , SGResponse : this.mailResponse});
    //      res.send();
    // });
})

console.log("SMS Service Started...")
app.listen(9002)
