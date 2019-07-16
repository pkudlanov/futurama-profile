const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

const users = [];

module.exports = Router()
    .post('/', (req, res) => {
        const {
            name,
            character
        } = req.body;

        const user = {
            name,
            character
        };

        users.push(user);
        res.send(user);
    })
    .get('/', futuramaQuote, (req, res) => {
        res.send(req.quote);
    });
