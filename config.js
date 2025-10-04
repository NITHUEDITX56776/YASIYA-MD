const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~Yd5WhLRJ#yLk8Kyb8bBoJcqUb7EEBdv5ISoQmZF6FdtN1MYJEoAk'
};
