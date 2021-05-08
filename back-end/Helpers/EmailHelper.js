const sgMail = require('@sendgrid/mail')
const sendGridEmail_Api_Key = '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';

sgMail.setApiKey(sendGridEmail_Api_Key)

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
        return this.mailResponse;
    })
    .catch((err) => {
         console.log(err.message);
         this.mailResponse = err;
         return this.mailResponse;
    });
    
    return this.mailResponse;
}

module.exports = sendMail;

