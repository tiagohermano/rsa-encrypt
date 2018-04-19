## Gerar chaves (OS baseado em Unix)

#### Gerar chave pública:
``` ssh
  openssl genrsa -out rsa_1024_priv.pem 1024
```

#### Gerar chave privada(baseada na pública):
``` ssh
  openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
```
