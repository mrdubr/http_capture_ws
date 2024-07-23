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
