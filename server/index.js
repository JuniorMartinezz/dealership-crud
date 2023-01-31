const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('hello sherwik')
})

app.listen(3001, () => {
    console.log('funfou');
})