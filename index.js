var { JSEncrypt } = require('jsencrypt');
var fs = require('fs');
var path = require('path');

function encrypt(pubKey, text) {
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(text);
}

function decrypt(privKey, encryptedText) {
  var decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privKey);
  return decrypt.decrypt(encryptedText);
}

var filePath = path.join(__dirname, "texto.txt");
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,texto){
    if (!err) {
        var pubKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvyVf9KjvCjorahZJB4Inv9O13RJdd0yo9AjRjfjEUDR+ms8eZ5cXSyOc+KTEbblC57HO9/GXFCql3iYla7RnswpY+/h2dhGzfe409QZ7RfOu1RMeMV7E0Hqmbfn02IL9ow9LqAq46JuMMDOU59QtrJCfgzvake9lnkDC0/+qR8cflAi6F478G/koBgQfOfJxOYqZHU2KaU+B8kxtLgj03fSL4WsqBYIqol/pJJQJABlVPuv0ludHc2O7YHs2Pf/Q/ulqg9Sw9oCGyrGYk6UFTPO+7iyFUj6XgbvrNcihal1bno/ivRa+il+Robw9jOMfsgyaRzkIOG0eynXLWCWfIwIDAQAB"
        var privKey = "MIIEowIBAAKCAQEAvyVf9KjvCjorahZJB4Inv9O13RJdd0yo9AjRjfjEUDR+ms8eZ5cXSyOc+KTEbblC57HO9/GXFCql3iYla7RnswpY+/h2dhGzfe409QZ7RfOu1RMeMV7E0Hqmbfn02IL9ow9LqAq46JuMMDOU59QtrJCfgzvake9lnkDC0/+qR8cflAi6F478G/koBgQfOfJxOYqZHU2KaU+B8kxtLgj03fSL4WsqBYIqol/pJJQJABlVPuv0ludHc2O7YHs2Pf/Q/ulqg9Sw9oCGyrGYk6UFTPO+7iyFUj6XgbvrNcihal1bno/ivRa+il+Robw9jOMfsgyaRzkIOG0eynXLWCWfIwIDAQABAoIBAQC9JSvNu3lHIoahZMoBTw8saD/3MdwhWE97pFpQ5ZDFWRzK7hdFJKLdLLGA7fKeLQwCn9WRTpRUVVtq905iRNO0vJGPTK9UaHG4NIZczHwhnWAs4s0mx4N0VVnpS8W4le6Mc29HKs0NCBbx/6jiuvgzYa0mvIytijqBHc5s3/pNKQqJNNR9CyzZxKL9GPiQ+fcRS96yfT3/7y1gwFtw6H0IlLkhijJjeNAfht3wsVg2afjde/xG/omL0G3tmRytWliFD5ecujXWtCC1WjpYl6NhlICoYNms6GrlKCmzZHTWXNohVbUSMkDdqLk1brFKz7ykOagC3GF36FeYWrd0i5HhAoGBAPT0g7yz1iaG9vESuTqCyZS2wQrmlXXDrKmMD0ZSyUgSWfIzQpTMXXx9wNHUDA81RhJlY8oY1W+w2QixvtDtKV7tZbYwyKssgBiqEiFbl+dEnAwH+xwFDQ4l6WVHEK005hdXGixPelk9s653ib90Ww4+/J3b8bKOXK3SDNqUQr6zAoGBAMfDv5BtScR/WcZ8oWuUE3QvX2s4uoSuPK64yk5csRtfalrf1zGDrOkR9SkmssFbDgDANY6wMST5zZbtcSSubNef2XMWKks44CNO8Xjz3rHXoXkQj0Rip98x7VzkWQwHYkWb1KICEU8SSA8t0ESLB2i7puwN+Ud5z4O87npFj9XRAoGAeIsXhTZOrXj/btUS+BtCjf99chrU9DYN8wWswqOcz+3P+6OEIWuMmeXcjKW4JYfG6uigOeUMq8EwnNmzmGcNU9ypkAXjynDEvN58u5OyZinaTQVkan6F1S+M8r0NFN+SV2wSwjl+cQovMS08SU4+PP18HUcOYxsxuoxCrRIG4ocCgYAzViDCsvNEJh4iHiE1jkY5k3sICPoV4tkBZcfHv5ZcHHcuh1u8A8TJ2K2SN7m0avv8QWkCFFFs2S12Xeq3rIOYHiI5qzaPQjyHlmAD31gZh/qdLB5FSr0tZJ1FRAGGT9d3YAaS48ki8uXF0NY25yuuRJsvCqBHOAyWJFV84qeGIQKBgD77EAcyYUWHkdRZsxx9Ot/CwsAiTYgMEgSyj4gVEuaRk1CGIYRncH1f0OBmKCOSOUJoQWku1XaLOGoWy3gdjVjzH7FU4smDMN/KbJU4fqa5lj9M6wllRm1yNy14Z966He85KtlqPlVdOo5mp7Mc58QKYZY23+qpbszcgxReKhrp"
        var encryptedText = encrypt(pubKey, texto);
        console.log('texto critografado:', encryptedText);
        var uncryptedText = decrypt(privKey, encryptedText);
        console.log('texto decriptografado:', uncryptedText);
    }
});
