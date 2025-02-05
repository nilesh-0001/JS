const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    // res.send('about')
})
app.get('/map', (req, res) => {
  res.send('map')
})
app.get('/contact', (req, res) => {
  res.send('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://Localhost:${port}`)
})

// express js is a very usefull npm module coz it sets up a full server by itself .