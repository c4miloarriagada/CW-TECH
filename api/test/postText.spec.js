const request = require('supertest');

module.require('../app.js')

describe('GET/text',()=>{
    test('should respond with Status 400', async()=>{
        const response = await request('http://localhost:8000').get('/iecho').send()
        expect(response.status).toBe(400);
    });
    test('should respond with Status 200', async()=>{
        const response = await request('http://localhost:8000').get('/iecho').query({'text': 'otto'})
        expect(response.status).toBe(200);
    });
    test('should respond with the flag Palindrome', async()=>{
        const response = await request('http://localhost:8000').get('/iecho').query({'text': 'Roma ni se conoce sin oro, ni se conoce sin amor.'})
        const obj = JSON.parse(response.text)
        expect(obj.palindrome).toBe('Palindrome');
    });
    test('should respond reverse Text', async()=>{
        const response = await request('http://localhost:8000').get('/iecho').query({'text': 'Roma ni se conoce sin oro, ni se conoce sin amor.'})
        const obj = JSON.parse(response.text)
        expect(obj.reverseText).toBe('.roma nis econoc es in ,oro nis econoc es in amoR');
    });
    test('should respond error Message', async()=>{
        const response = await request('http://localhost:8000').get('/iecho').query({'text': ''})
        const obj = JSON.parse(response.text)
        expect(obj.msg).toBe('Error please add some text')
    });
})