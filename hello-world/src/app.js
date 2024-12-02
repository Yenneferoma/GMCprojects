const express = require('express');
const dataSanitizer = require('./email-sender/middlewares/dataSanitizer');
const dataValidator = require('./email-sender/middlewares/dataValidator');
const app = express();
const transporter = require('./email-sender/helpers/smtpTransport');
const envVariables = require('./email-sender/constants/index');


app.use(express.json());

const { USER_EMAIL } = envVariables;
app.get('/', (req, res) => {
    res.send('This is the email sender app');
});

app.post('/email/send', dataValidator, dataSanitizer,  async (req, res) => {
    const {email, message} = req.body;

    const mailOptions = {
        to: email,
        from: USER_EMAIL,
        subject: 'Message from Email Sender App',
        html: `<h1>${message}</h1>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log(error);
        return res.status(500).json({error: 'Something went wrong, please try again later'});
    }
    console.log(`Email sent: ${info.response}`);
    res.status(200).json({message: 'Email sent successfully'});
});

});  





module.exports = app; // Export the app object

