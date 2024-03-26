show databases;
create database training;
use training;
create table students(
	name varchar(50) not null unique,
    rollno int not null,
    age int not null,
    gender varchar(10) default 'Male');
insert into students(name, rollno, age) values('Sukhmeet singh',469,22);
select * from students;