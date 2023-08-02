const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/message', (req, res) => {
    const queryMessage = req.query?.message;
    const bodyMessage = req.body?.message;
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    console.log({
        server_name: process.env.SERVER_NAME,
        query_message: queryMessage,
        body_message: bodyMessage
    })
    res.json({
        server_name: process.env.SERVER_NAME,
        query_message: queryMessage,
        body_message: bodyMessage
    })
    
})

app.listen(8080, () => {
    console.log('Server running port 8080');
})