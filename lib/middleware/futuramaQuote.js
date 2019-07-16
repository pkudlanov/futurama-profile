const { getRandomQuote } = require('../services/futuramaApi');

module.exports = (req, res, next) => {
    console.log(req.body);
    getRandomQuote(1, req.body.character)
        .then(quote => {
            req.quote = quote[0];
            next();
        });
};
