const express = require('express');

const app = express();
const port = 3000;
const colors = [
    'red',
    'green',
    'blue'
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    //res.locals.prompt = "What is my favorite game?";
    //res.render('card');
    res.render('card', {
        prompt: "What is my favorite game?",
        colors 
        //hint: "The best team-based multiplayer first-person shooter, developed and published by Blizzard Entertainment"
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello there!');
});

app.listen(3000, () => {
    console.log(`The application is running on localhost:${port}`);
});