CREATE DATABASE roadSideAssistance;
USE roadSideAssistance;

CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' WITH GRANT OPTION;
flush privileges;