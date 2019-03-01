// PORT_TEST=9999 node server.js
const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT_TEST || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
