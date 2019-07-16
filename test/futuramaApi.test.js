const getRandomQuote = require('../lib/services/futuramaApi');

describe('getRandomQuote test', () => {
    it('generates a random quote based on character and qoute count', () => {
        const count = 2;
        const char = 'Bender';

        const result = getRandomQuote(count, char);

        expect(result).toEqual([{
            character: 'Bender',
            quote: expect.any(String),
            image: expect.any(String)
        }, {
            character: 'Bender',
            quote: expect.any(String),
            image: expect.any(String)
        }]);
    });
});
