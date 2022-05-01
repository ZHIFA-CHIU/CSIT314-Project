# CSIT314-Project

Welcome to CSIT314 project repo for RoadSideAssistance Application

![Java CI with Maven](https://github.com/ZHIFA-CHIU/CSIT314-Project/actions/workflows/maven.yml/badge.svg)

## Requirements
You will need to install
- Docker
- Node.js
- JDK17

Recommended
- Intellij
- Postman

## Running Backend and Frontend

To start the application (backend and front end) we first need to create a mysql db via docker. Then we can run the
backend and frontend code.


### docker command for MYSQL container (or you can spin up a DB elsewhere)
```
docker run --name roadSideAssist -it --rm -p 3306:3306 -e MYSQL_DATABASE=roadSideAssistance -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql
```
#### Granting privileges

###### Listing containers
```
docker ps
```
###### Opening bash
```
docker exec -it <CONTAINER_ID>  mysql -uroot
```
###### Creating user with privileges
```
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';  
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;  
flush privileges;  
```
### Running the backend
To start the application, run the main method in RoadSideAssistanceApplication

### Running the frontend
cd into the frontend directory  
```
cd FrontEnd
```
install all dependencies  
```
npm install  
```
start react project
```
npm start
```

### Access
The frontend can be accessed via
```
http://localhost:3000/
```
The backend API can be accessed via
```
http://localhost:8080//api/v1/<insertControllerEndpoint>
```

