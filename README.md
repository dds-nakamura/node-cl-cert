# This Node.js Cert authentication Project

  - Client authentication (self certificate)
  - Server self certificate
  - Client certificate request and verification within SSL/TLS handshake


## Requirement install software

 - cUrl
 - Node.js


## It's Execute 

### Get install

```
  cd test
  npm install
```

### Run Server

```
  npm start
```

Display [port] number.

### Run Client

```
cd test/keyfiles
curl -v -k --key client.key --cert client.crt https://127.0.0.1:[port]
```


## Reference site

[node.js/クライアント認証がしたい](https://vok.paburica.com/index.php?node.js%2F%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E8%AA%8D%E8%A8%BC%E3%81%8C%E3%81%97%E3%81%9F%E3%81%84)

[Node.jsによるHTTPS認証証明書](https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2)

### Memo (Key creation procedure)

- server key


```
cd test
openssl genrsa 4096 > "./keyfiles/server.key"
openssl req -batch -new -sha256 -key "./keyfiles/server.key" -out "./keyfiles/server.csr" 
openssl x509 -req -days 3650 -signkey "./keyfiles/server.key" -in "./keyfiles/server.csr" -out "./keyfiles/server.crt"
```

- client key

```
openssl genrsa 4096 > "./keyfiles/client.key"
openssl req -batch -new -sha256 -key "./keyfiles/client.key" -out "./keyfiles/client.csr" 
openssl x509 -req -days 3650 -signkey "./keyfiles/client.key" -in "./keyfiles/client.csr" -out "./keyfiles/client.crt"
```

test