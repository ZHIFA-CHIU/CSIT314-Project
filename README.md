# CSIT314-Project

Welcome to CSIT314 project repo for RoadSideAssistance Application

## Requirements

You will need to install

- MySQL server and workbench
- Node.js
- JDK17

Recommended

- Intellij
- Postman

## Running Backend and Frontend

To start the application (backend and front end) we first need to create a local mysql connection, this can be done
with the MySQL workbench

### Creating a Mysql database
Start up MySQL workbench  
Create a local connection using port 3306  

#### Create DB and users
Run the createUsers.sql file

##### Create tables
Run the createTables.sql file

##### summary
You will now be able to run the spring boot backend, this has been configured to validate against the database.
This means that you will commonly run into errors where the back / front end doesn't explicitly line up. 
Please update the models and DB where appropriate.

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

