const request = require('superagent');

// futuramaapi.herokuapp.com/api/characters/<character name>/<count>

const getRandomQuote = (count, charName) => {
    return count + charName;
}; 

module.exports = { getRandomQuote };
