CREATE DATABASE roadSideAssistance;
USE roadSideAssistance;

CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON roadSideAssistance.* TO 'user'@'localhost';
flush privileges;