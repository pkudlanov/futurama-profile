const request = require('superagent');

// futuramaapi.herokuapp.com/api/characters/<character name>/<count>
// http://futuramaapi.herokuapp.com/api/characters/Bender/3

const getRandomQuote = (count, charName) => {
    return request
        .get(`http://futuramaapi.herokuapp.com/api/characters/${charName}/${count}`)
        .then(res => res.body);
}; 

module.exports = { getRandomQuote };
