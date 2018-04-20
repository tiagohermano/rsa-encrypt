## Gerar chaves (OS baseado em Unix)

#### Gerar chave pública:
``` ssh
  openssl genrsa -out rsa_2048_priv.pem 2048
```

#### Gerar chave privada(baseada na pública):
``` ssh
  openssl rsa -pubout -in rsa_2048_priv.pem -out rsa_2048_pub.pem
```

## Execução:
``` ssh
  node index.js
```
