var JSEncrypt = require('jsencrypt');
var fs = require('fs');
var path = require('path');

function encrypt(pubKey, text) {
  // Encrypt with the public key...
  var encrypt = new JSEncrypt();
  // encrypt.setPublicKey($('#pubkey').val());
  return encrypt.encrypt(text);
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
        var pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC84FdrsPMLob+M6xiNsLaRnR02zySbUDcegvqW+/lqXCQcx7ark8ShQ1HW+4sPsc5FyEikRDOOyDBeqwd6g4gvjg7Ge4fDcGACFMTMcTAavVqKxBQJEom+5tP82y0cYyusK3MqjS7Ga2bA34px7LzKZl54+Mu6FvkYBls8h/rzPwIDAQAB"
        var privKey = "MIICXAIBAAKBgQC84FdrsPMLob+M6xiNsLaRnR02zySbUDcegvqW+/lqXCQcx7ark8ShQ1HW+4sPsc5FyEikRDOOyDBeqwd6g4gvjg7Ge4fDcGACFMTMcTAavVqKxBQJEom+5tP82y0cYyusK3MqjS7Ga2bA34px7LzKZl54+Mu6FvkYBls8h/rzPwIDAQABAoGBAIS301X94drDjpjTvc4aZT9Oum+AAMYOCJ0tBi6/4hOlqU5721UXIWz7o+8/lAi0NTB9uuWKcvwamTp8TWX+NNuWgT7IgU9flzXy4yJrh60Sn9qAvu174xP/iz4zLiBq2gzP8Bx/SDrQSu4Ng1FKF92xtQCTDpUOYaivefa9T/A5AkEA9xwLxRXF6EpTwKDzq8Hjz6DMa04Jb8cqEkMxQIWVDrah36RGT3Ev/a1Y/BbnZXOD8uBwriIlTqTWrGkEXUXWYwJBAMOr8yqP8XajGxolw09AA/YnS4yJdY4zF3nLyKwRsS8kaHMsGQn0NdknhfAyOSzLiqyaJ3G7B8nXv6+HnibVqHUCQB/ty8eHbK77C59ULKgAwYLOcBtdVfLPdSwu6mo/2GaySnAvNbaGFYFdqKXJ/9Qn/OChB244k0F6IxLb7uhuYakCQBD3sS9oqgSiojADREtz/qPyxl9acCIzlf6OyEj7g8TVwGT0VvuA/MZm4ftxL3oN8GmFOJRpJoS/O7UJ6pHthx0CQD+RaCgg08slK58kP+XZCg7vdItXhIF4EZK0F+A6hEl9XZsoHqBKoCF6gwb9EcuTRrIHangiA3qseP8Nt8yqaqM="
        var encryptedText = encrypt(pubKey, texto);
        var uncryptedText = decrypt(privKey, encryptedText);
        console.log(uncryptedText);
    }
});
