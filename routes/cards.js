const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const {cards} = data;


router.get('/:id', (req, res) => {
    const {side} = req.query;
    const {id} = req.params;
    const text = cards[id][side];
    const {hint} = cards[id];
    let templateData = {id, text};

    if (side === "question"){
        templateData = {backSide: "answare", ...templateData, ...side, ...hint};
        //const backSide = "answare"
        //templateData = {side, backSide, text, hint, id};
    } else if(side === "answare"){
        const backSide = "question";
        templateData = {side, backSide, text, id};
    } else {
        const err = new Error("No card side was request")
        err.status = 500;
        res.locals.error = err;
        res.render('error');
    }
    try{
        res.render('card', templateData);
    }catch(err){
        err.message = `There are no cards with id: ${req.params.id}`
        res.locals.error = err;
        res.render('error');
    }
});

module.exports = router;