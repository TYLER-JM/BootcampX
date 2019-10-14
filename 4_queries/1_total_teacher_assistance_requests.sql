/*
SELECT teachers.name, COUNT(*) as total_requests
FROM teachers
JOIN assistance_requests
ON teachers.id = teacher_id
GROUP BY teachers.name;
*/

SELECT COUNT(*) as total_assistances, teachers.name
FROM teachers
JOIN assistance_requests
ON teachers.id = teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;