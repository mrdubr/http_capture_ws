A dummy web server listing to 8080 and logging the details (headers and bodies) of the incoming HTTP requests.

##  HOW-TO
```
docker build -t http-logger .
docker run -p 8080:8080 http-logger
```