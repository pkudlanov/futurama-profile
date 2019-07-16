const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

module.exports = Router()
    .get('/', futuramaQuote, (req, res) => {
        res.send(req.quote);
    });
