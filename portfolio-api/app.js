const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SENDGRID_API_KEY = require('SENDGRID_API_KEY');
const sendGrid = require('@sendGrid/mail');


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((res, req , next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

app.get('/api', (res, req, next) => {
    res.send('API STATUS: Running')
});

app.post('/api/email', (res, req, next) => {
    sendGrid.setApiKey('SENDGRID_API_KEY');

    const msg = {
        to: "marques.johnson1992@gmail.com",
        from: req.body.email,
        subject: "Website Contact",
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })

        .catch(err => {
            console.log('error:', error)
            res.status(401).json({
                success: false
            });
        });
});

app.listen(4000, '0.0.0.0');