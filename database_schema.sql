drop database uas_database;
create database uas_database;
use uas_database;

create table user(
    id int primary key auto_increment,
    nama varchar(50) not null,
    telepon varchar(13) not null
);
create table post(
    id int primary key auto_increment,
    judul varchar(50) not null,
    tulisan varchar(13) not null,
    user_id int
);