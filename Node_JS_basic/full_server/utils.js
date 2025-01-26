const fs = require('fs').promises;

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim());

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      resolve(fields);
    })
    .catch(() => reject(new Error('Cannot load the database')));
});

module.exports = readDatabase;
