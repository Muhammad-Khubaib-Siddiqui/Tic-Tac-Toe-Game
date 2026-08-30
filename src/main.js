const express = require('express');
const path = require('path');
const app = express()
const port = 3000

//MiddleWares
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

//Routes
app.post('/auth/signup', (req, res) => {
    console.log(req);
    res.send("success");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})