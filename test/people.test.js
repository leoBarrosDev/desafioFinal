const request = require('./request')

describe('People', () => {
	it('should return a list of people', async () => {
        const response = await request.get('/api/v1/people');
        expect(response.status).toBe(200);
     })
});

