const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

const profiles = [];

module.exports = Router()
    .post('/', (req, res) => {
        const {
            name,
            character
        } = req.body;

        const profile = {
            name,
            character
        };

        profiles.push(profile);
        res.send(profile);
    })
    .get('/', (req, res) => {
        res.send(profiles);
    })
    .get('/:name', (req, res) => {
        const profileIndex = profiles.findIndex(profile => profile.name === req.params.name);
        res.send(profiles[profileIndex]);
    });
