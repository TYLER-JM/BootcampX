SELECT students.name as student, COUNT(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students
ON (student_id = students.id)
WHERE students.end_date IS NULL
GROUP BY student
HAVING COUNT(assignment_submissions.*) < 100
ORDER BY total_submissions desc;