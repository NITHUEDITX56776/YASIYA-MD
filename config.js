const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~RVJ1CRAb#HK38r6B0oZRwVRZhFvAWN3gZ-g1DGt8tzebJTNlIIBw'
};
