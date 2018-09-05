const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const {cards} = data;


router.get('/:id', (req, res) => {
    //res.locals.prompt = "What is my favorite game?";
    cardNum = req.params.id;
    try{
    //if(cardNum >= 0 || cardNum < cards.length){
        res.render('card', {
            prompt: cards[cardNum].question,
            hint: cards[cardNum].hint 
            //hint: "The best team-based multiplayer first-person shooter, developed and published by Blizzard Entertainment"
        });
    }catch(err){
        err.message = "There are no cards anymore!"
        res.locals.error = err;
        res.render('error');
    }
});

module.exports = router;