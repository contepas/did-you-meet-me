const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 3000;
const colors = [
    'red',
    'green',
    'blue'
];
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const name = req.cookies.username
    if(name){
        res.render('index', {name});
    }else{
        res.redirect('/hello');
    }
    
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
    const name = req.cookies.username
    if(!name){
        res.render('hello');
    }else{
        res.redirect('/');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
})

app.listen(3000, () => {
    console.log(`The application is running on localhost:${port}`);
});