const http = require('http');
const app = require('./app');
const httpServer = http.createServer(app);
const envVariables = require("./email-sender/constants/index");


const {PORT}= envVariables;

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });