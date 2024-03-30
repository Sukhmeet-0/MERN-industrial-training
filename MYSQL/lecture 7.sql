use training;
show tables;
select * from studentCourses inner join courses on studentCourses.code=courses.code;
select studentCourses.studId,courses.coursename,courses.fee from studentCourses inner join courses on studentCourses.code=courses.code; 
select * from studentCourses inner join courses on studentCourses.code=courses.code inner join students on studentCourses.studId=students.studId;
select * from courses where fee >5000 and fee<8000;
select * from courses where fee between 6000 and 9000;