const request = require('supertest');
const app = require('../lib/app');

describe('testing all the routes', () => {
    it('creates a profile with POST', () => {
        return request(app)
            .post('/api/v1/futurama')
            .send({ name: 'Pavel Kudlanov', character: 'Bender' })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'Pavel Kudlanov',
                    character: 'Bender'
                });
            });
    });
});
