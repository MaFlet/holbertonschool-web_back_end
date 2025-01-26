// Import the http module from Node.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const output = 'This is the list of our students\n';
    try {
      const data = await countStudents(process.argv[2]);
      res.end(output + data);
    } catch (error) {
      res.end(output + error.message);
    }
  }
});

app.listen(1245);

module.exports = app;
