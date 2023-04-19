--looking for student by id
select * 
    from student
    where student.student_id = '$1'; 

--looking for student by username
select * 
    from student
    where student.username = '$1'; 

--looking for student previous submissions
select s.student_id, s.username, isu.survey_id, i.job_id, i.position_name, c.name
    from internship i
        inner join internship_survey isu on i.job_id = isu.job_id
            inner join student s on isu.student_id = s.student_id
        left outer join company c on i.company_id  = i.company_id
    where s.username = '$1'
    order by isu.survey_id;

--creating new internship_survey tuple
insert into internship_survey(survey_id, student_id, job_id)
    values ('$1, $2, $3');

--list of companies
select * from company;

--list of tags
select * from tag;

-- Delete a student:
DELETE FROM student WHERE student_id = '$1';

-- Delete an internship:
DELETE FROM internship WHERE job_id = '$1';

-- Delete an internship survey:
DELETE FROM internship_survey WHERE survey_id = $1;

--insert statement for a new internship
insert into internship(job_id, company_id, tag_id, position_name, position_type, location, start_date, end_date, semester)
    values('$1, $2, $3, $4, $5, $6, $7, $8, $9');

--insert for new company 
insert into company(company_id, name, industry, location)
    values('$1, $2, $3, $4');

-- insert for new tags
insert into tag(tag_id, description)
    values('$1, $2');

--update statemnt for existing internship
update internship
    set position_name = '$1',
        start_date = '$2',
        end_date = '$3'
    where job_id = '$4';

--update statement for existing student
update student
    set grade_level = '$1',
        major = '$2',
        school = '$3',
        email = '$4'
    where username = '$5';

-- view table combining all tables in schema to create a submission
create view project_view as 
    select i.job_id as 'Internship ID', i.position_name, i.position_type, i.location as 'Job Location', i.start_date, i.end_date, i.semester, isu.survey_id as 'Submission ID', s.student_id as 'Student ID', s.username, 
    s.grade_level, s.major, s.school, s.email, t.tag_id as 'Tag ID', t.description as 'Tag', c.company_id as 'Company ID', 
    c.name as 'Company Name', c.industry
    from internship i 
        inner join internship_survey isu on i.job_id = isu.job_id
            inner join student s on isu.student_id = s.student_id
        left outer join tag t on i.tag_id = t.tag_id
        inner join company c on i.company_id = c.company_id;

