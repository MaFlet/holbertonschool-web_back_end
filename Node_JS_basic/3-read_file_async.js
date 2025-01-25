const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim()); // Skip header and empty lines

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = { count: 0, students: [] };
        }
        fields[field].count += 1;
        fields[field].students.push(firstname);
      });

      for (const [field, data] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${data.count}. List: ${data.students.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
