const { Pool } = require('pg');
let [ cohort, limit ] = process.argv.splice(2);

const pool = new Pool({
  user: 'vagrant',
  password: 123,
  host: 'localhost',
  database: 'bootcampx'
});

// pool.connect();

pool.query(`
SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON (cohort_id = cohorts.id)
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit || 5};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    });
    // console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));