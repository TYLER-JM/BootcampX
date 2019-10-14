SELECT assignments.id, assignments.name, assignments.day, assignments.chapter, COUNT(*) as total_requests
FROM assignments
JOIN assistance_requests
ON (assignments.id = assignment_id)
GROUP BY assignments.id, assignments.name, assignments.day, assignments.chapter
ORDER BY total_requests DESC;