A dummy web server listing to 8080 and logging the details (headers and bodies) of the incoming HTTP requests.

##  HOW-TO
```
docker build -t http-logger .
docker run -p 8080:8080 http-logger
```

## Sample call
```
###
GET http://127.0.0.1:8080
Accept: application/json
Secret-token: secret-that-will-get-logged
```

Will log:
```
Headers: {
  'user-agent': 'vscode-restclient',
  accept: 'application/json',
  'secret-token': 'secret-that-will-get-logged',
  'accept-encoding': 'gzip, deflate',
  cookie: 'JSESSIONID=node0db1o1bk6zn2o1xtjmagl8cwcy1495.node0',
  host: '127.0.0.1:8080',
  connection: 'close'
}
Body: 

```
