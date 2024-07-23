// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // Convert Buffer to string.
  });
  req.on('end', () => {
    console.log('Headers:', req.headers);
    console.log('Body:', body);
    res.end('Request logged');
  });
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));