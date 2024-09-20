const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'LiveAi Academy API',
            version: '1.0.0',
            description: 'API documentation for LiveAi Academy',
            contact: {
                name: 'Ojas Joshi',
            },
            servers: [{ url: 'https://liveai-acedemy.onrender.com' }],
        },
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        full_name: { type: 'string', description: 'Full name of the user' },
                        email: { type: 'string', description: 'Email of the user' },
                        subscription_status: { type: 'string', enum: ['free', 'paid'] },
                    },
                },
                Course: {
                    type: 'object',
                    properties: {
                        course_name: { type: 'string', description: 'Name of the course' },
                        course_description: { type: 'string', description: 'Description of the course' },
                        course_amount: { type: 'number', description: 'Amount of the course' },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Location of your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
