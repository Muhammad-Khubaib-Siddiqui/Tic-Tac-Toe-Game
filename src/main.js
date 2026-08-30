const express = require('express');
const path = require('path');
const app = express()
const port = 3000

//MiddleWares
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

//Routes
app.post('/auth/signup', (req, res) => {
  res.send('Hello World!')
    res.sendFile(path.join(__dirname,'..','public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})