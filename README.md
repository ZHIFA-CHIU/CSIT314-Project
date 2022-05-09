# CSIT314-Project

Welcome to CSIT314 project repo for RoadSideAssistance Application

![Java CI with Maven](https://github.com/ZHIFA-CHIU/CSIT314-Project/actions/workflows/maven.yml/badge.svg)

## Requirements
You will need to install
- MySQL server and workbench
- Node.js
- JDK18

Recommended
- Intellij
- Postman

## Maven install commands
## install dependencies
mvn clean install

## Build
mvn -B package --file pom.xml

## Test
mvn --batch-mode -Dmaven.test.failure.ignore=true test

## Run
mvn run

## Running Backend and Frontend

To start the application (backend and front end) we first need to create a local mysql connection, this can be done
with the MySQL workbench

### Creating a Mysql database
Start up MySQL workbench  
Create a local connection using port 3306

#### Create DB and users
Run the createUsers.sql file

##### Create tables
During development, tables will be created by springBoot, this will then be switched to instead validate against a DB
when released

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


