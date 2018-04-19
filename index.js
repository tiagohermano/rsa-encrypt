var aesjs = require('jsencrypt');
var fs = require('fs');
var path = require('path');

function encrypt(pubKey, text) {
  // Encrypt with the public key...
  var encrypt = new JSEncrypt();
  // encrypt.setPublicKey($('#pubkey').val());
  return encrypt.encrypt($('#input').val());
}

function decrypt(privKey, encryptedText) {
  // Decrypt with the private key...
  var decrypt = new JSEncrypt();
  // decrypt.setPrivateKey($('#privkey').val());
  return decrypt.decrypt(encryptedText);
}

var filePath = path.join(__dirname, "texto.txt");
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
        var encryptedText = encrypt(pubKey, text);
        var uncryptedText = decrypt(privKey, encryptedText);
    }
});
