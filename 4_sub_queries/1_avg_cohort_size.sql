/* MY SOLUTION
SELECT (
  SELECT COUNT(*)
  FROM students
) / COUNT(*) as avg_students_per_cohort
  FROM cohorts;
*/

--FROM COMPASS

SELECT avg(total_students) as average_students
FROM (
  SELECT count(students) as total_students
  FROM students
  JOIN cohorts on cohorts.id = cohort_id
  GROUP BY cohorts
) as totals_table;