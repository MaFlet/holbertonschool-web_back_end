const http = require('http');
const countStudents = require('./3-read_file_async');

function processStudents(path) {
  return new Promise((resolve, reject) => {
    countStudents(path)
      .then(() => {
        let message = 'This is the list of our students\n';
        message += 'Number of students: 10\n';
        message += 'Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie\n';
        message += 'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy';
        resolve(message);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    processStudents(process.argv[2])
      .then((message) => {
        res.end(message);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;
