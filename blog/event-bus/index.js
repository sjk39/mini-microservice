const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Array to simulate DB for event history.
const events = [];

app.post('/events', (req, res) => {
    const event = req.body;
    console.log(event);

    events.push(event);

axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
    console.log('Posts error');});
axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
    console.log('Comments error');});
axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
    console.log('Query error');});
axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
    console.log('Moderation error');});

res.send({ status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Listening on port 4005.')
});