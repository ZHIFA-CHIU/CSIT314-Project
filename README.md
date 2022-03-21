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
