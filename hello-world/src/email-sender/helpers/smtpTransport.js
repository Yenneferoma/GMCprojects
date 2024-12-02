const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const envVariables = require('../constants/index');

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, USER_EMAIL } = envVariables;

const oauth2 = google.auth.OAuth2;
const oauth2Client = new oauth2(
    CLIENT_ID, 
    CLIENT_SECRET, 
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN});

const transport = nodemailer.createTransport({  

    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: oauth2Client.getAccessToken(),
    },
});

module.exports = transport;

