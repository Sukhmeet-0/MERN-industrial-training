create database training;
use training;
create table course(id int primary key , name varchar(50) not null,gender varchar(10) default 'Male', fee int not null);
insert into course values(1,'sukh','Male',14500),(2,'harmeet','Male',5000),(3,'gurmeet','Male',7000);
select * from course;
select * from course where fee between 6000 and 7000;
select * from course where name='sukh';
select * from course where name in ('sukh','gurmeet');
select * from course where name like '%har%';
select * from course limit 1;
select * from course order by name asc;
select * from course order by name desc;
select distinct(name) from course;
select distinct(fee) from course order by fee desc limit 2;

