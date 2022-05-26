const fs = require("fs");
const encrypt = require("./encrypt");
const decrypt = require("./decrypt");


// Encryption with public key was carried out here
const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, "Developeruche secret message");
console.log(encryptedMessage.toString());



// Decryption with private key was carried out here
const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', "utf8");
const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);
console.log(decryptedMessage.toString());