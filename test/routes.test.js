const request = require('supertest');
const app = require('../lib/app');

describe('testing all the routes', () => {
    it('creates a profile with POST', () => {
        return request(app)
            .post('/api/v1/profile')
            .send({ name: 'Pavel Kudlanov', character: 'Bender' })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'Pavel Kudlanov',
                    character: 'Bender',
                    quote: expect.any(Object)
                });
            });
    });
    
    it('gets a list of all profiles with GET', () => {
        return request(app)
            .get('/api/v1/profile')
            .then(res => {
                expect(res.body).toEqual([
                    { name: 'Pavel Kudlanov', character: 'Bender', quote: expect.any(Object) }
                ]);
            });
    });

    it('gets a profile by name with GET/:name', () => {
        return request(app)
            .get('/api/v1/profile/Pavel%20Kudlanov')
            .then(res => {
                expect(res.body).toEqual(
                    { name: 'Pavel Kudlanov', character: 'Bender', quote: expect.any(Object) }
                );
            });
    });

    it('updates the users favorite character with PATCH', () => {
        const newCharacter = { character: 'Bender' };

        return request(app)
            .patch('/api/v1/profile/Pavel%20Kudlanov')
            .send(newCharacter)
            .then(res => {
                expect(res.body).toEqual(
                    { name: 'Pavel Kudlanov', character: 'Amy', quote: expect.any(Object) }
                );
            });
    });
});
