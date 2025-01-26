const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const outputMessage = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then(() => {
        res.end(outputMessage);
      })
      .catch((error) => {
        res.end(outputMessage + error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
