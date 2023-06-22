const { Pool } = require('pg');


const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

let cohort = process.argv[2] || 'JUL02';
const values = [cohort];
const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON (teachers.id = teacher_id)
JOIN students ON (student_id = students.id)
JOIN cohorts ON (cohort_id = cohorts.id)
WHERE cohorts.name = $1
ORDER BY teacher;
`;
pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
    // console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));