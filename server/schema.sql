CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer not null auto_increment,
  text varchar(1000) not null,
  roomname varchar(20) default 'lobby',
  createdAt datetime not null,
  user_id integer not null,
  PRIMARY KEY (`id`)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id integer not null auto_increment,
  username varchar(20) not null,
  PRIMARY KEY (`id`)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

