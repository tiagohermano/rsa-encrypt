var { JSEncrypt } = require('jsencrypt');

function encrypt(pubKey, text) {
  // Encrypt with the public key...
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(text);
}

function decrypt(privKey, encryptedText) {
  // Decrypt with the private key...
  var decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privKey);
  return decrypt.decrypt(encryptedText);
}
