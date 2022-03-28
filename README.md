<<<<<<< HEAD

# CSIT314 Front End

[toc]

## Preparation

To run the program, you need to install Node.js and npm on your workstation.

You can download it from the link below:

https://nodejs.org/en/download/

## Run the Program

```bash
# clone the repo to your local workstation, if you has not done that
git clone git@github.com:ZHIFA-CHIU/CSIT314-Project.git

cd CSIT-Project
```

```bash
# Pull the remote repo, if you cloned the repo before
git pull git@github.com:ZHIFA-CHIU/CSIT314-Project.git
```

~~~bash
# switch to front_end branch
git checkout front_end
~~~

```bash
# download all dependencies
npm install
```

~~~bash
# start react project
npm start
~~~

Open your browser, enter `http://localhost:3000/`, you should see a message `Roadside Assitant Service`.

# CSIT314-Project
Welcome to CSIT314 project repo for RoadSideAssistance Application

##Running
To start the application, run the main method in RoadSideAssistanceApplication 

##docker command for MYSQL container (or you can spin up a DB elsewise)
docker run -it --rm -p 3306:3306 -e MYSQL_DATABASE=roadSideAssistance -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql

###Granting privileges
#####Listing containers
docker ps
#####Opening bash
docker exec -it <CONTAINER_ID>  mysql -uroot
#####Creating user with privileges
CREATE USER 'user'@'172.17.0.1' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'172.17.0.1' WITH GRANT OPTION;
flush privileges;
exit
>>>>>>> aeed3936a8f46a532dfa7f456f9856f1902c9c2f
