const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~NZ4ghD4C#TflF3e8QSXJBWoZsQMAcmA5sNWXHi8ZSQ0wTElmpe-4'
};
