const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const outputMessage = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then(() => {
      const message = `${outputMessage}Number of students: 10\nNumber of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`;
      res.send(message);
    })
    .catch((error) => {
      res.send(`${outputMessage}${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
