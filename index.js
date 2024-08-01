require('dotenv').config();

const express = require('express');

const app = express();

const port = 4000;

// If you need to use githubData, assign it some value or remove it if not needed.
// const githubData = "Some data";

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/test', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});


app.get('/login', (req, res) =>{
    res.send('<h1>please login in at home page  </h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
