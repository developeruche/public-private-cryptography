const crypto = require("crypto");


function encryptWithPublicKey(publicKey, message) {
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
}


module.exports.encryptWithPublicKey = encryptWithPublicKey;