const crypto = require("crypto");


function decryptWithPrivateKey(privateKey, encryptedMessage) {
    return crypto.privateDecrypt(privateKey, encryptedMessage);
}


module.exports.decryptWithPrivateKey = decryptWithPrivateKey;