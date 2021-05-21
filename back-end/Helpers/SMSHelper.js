require('dotenv').config();

const twilioSid = process.env.TWILIO_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
var senderNO = process.env.PHONE_NO;

const twilio = require('twilio');
var client = new twilio(twilioSid , twilioAuthToken);


const sendSMS = (toNumber , OTP) => {
    client.messages.create({
        body: 'Use Your OTP : ' + OTP,
        to: toNumber,
        from: senderNO,
    })
    .then((message) => {
         console.log('SMS Sent...');
         console.log(message);
         return Promise.resolve(message)
    })
    .catch((error) => {
        console.log('SMS Error : ' , error);
        return Promise.reject(error);
    })
}

module.exports = sendSMS;