const logger = require('../lib/middleware/logger');

describe('testing the logger', () => {
    it('it logs the request method and path', () => {
        console.log = jest.fn();

        const req = {
            method: 'GET',
            path: '/test'
        };

        const next = jest.fn();

        logger(req, {}, next);

        expect(next).toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith('GET /test');
    });
});
