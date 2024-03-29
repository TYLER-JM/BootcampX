SELECT students.name as student, AVG(assignment_submissions.duration) as avg_assignment_duration, AVG(assignments.duration) as avg_estimated_duration
FROM students
JOIN assignment_submissions ON (students.id = student_id)
JOIN assignments ON (assignment_id = assignments.id)
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignments.duration) > AVG(assignment_submissions.duration)
ORDER BY avg_assignment_duration asc;