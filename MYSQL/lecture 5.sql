show databases;
create database training;
use training;
create table students(id int not null unique, fullname varchar(50) not null,mobile int not null);
select * from students;
drop table students;
show tables;
create table students(studId int primary key,fullname varchar(50) not null,mobile varchar(15) not null);
insert into students values(1001,'sukhmeet singh',9988899879);
insert into students values(1002,'Harmeet singh',9815161041);
select * from students;
create table courses(code int primary key,coursename varchar(50) not null,duration int not null,fee int not null);
insert into courses values(11,'python',6,7000);
insert into courses values(12,'java',6,9000);
select * from courses;
create table studentCourses(id int primary key,studId int, code int,foreign key(studId) references students(studId),foreign key(code) references courses(code));
select * from studentCourses;
insert into studentCourses values(1,1234,1234);
insert into studentCourses values(1,1001,11);