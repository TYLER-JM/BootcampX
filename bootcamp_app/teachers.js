const { Pool } = require('pg');
let cohort = process.argv[2];


const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON (teachers.id = teacher_id)
JOIN students ON (student_id = students.id)
JOIN cohorts ON (cohort_id = cohorts.id)
WHERE cohorts.name = '${cohort || 'JUL02'}'
ORDER BY teacher;
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}; ${user.teacher}`);
    });
    // console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));