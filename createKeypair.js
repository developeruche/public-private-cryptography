// importing important lib
const crypto = require("crypto");
const fs = require("fs");




function genKeyPair() {
    // this function generates a public and private key and stores them in a .pem file in the same directory
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, // bits - standard for RSA keys
        publicKeyEncoding: {
            type: "pkcs1", // Public key cryptography standard 1
            format: 'pem' // Most common formatting choice
        },
        privateKeyEncoding: {
            type: "pkcs1", // Public key cryptography standard
            format: "pem"
        }
    });

    // creating and storing the keys in their files
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keyPair.publicKey);
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keyPair.privateKey);
}


genKeyPair()