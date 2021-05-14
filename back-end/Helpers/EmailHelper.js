const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (toAddress , OTP) =>{
    let mailResponse = null;
    const message = {
        to: toAddress,
        from: 'mahendra.testprojects@gmail.com',
        subject: 'OTP From Lorem-E-Shop',
        text: OTP,
        html: '<h1> Use Your OTP : '+ OTP +'  </h1>'
    }


    sgMail.send(message)
    .then((res) => {
        console.log('Email Sent...');
        this.mailResponse = res;
        return Promise.resolve(this.mailResponse) ;
    })
    .catch((err) => {
         console.log('Email Error : ' , err.message);
         this.mailResponse = err;
         return Promise.resolve(this.mailResponse) ;
    });
    return Promise.resolve(this.mailResponse) ;
}

module.exports = sendMail;

