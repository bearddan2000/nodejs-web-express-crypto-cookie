var session = require('cookie-session')
var express = require('express')
var app = express()

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'example.com',
    path: 'foo/bar',
    expires: expiryDate
  }
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
