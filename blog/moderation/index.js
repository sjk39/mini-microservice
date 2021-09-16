const express = require('express');
const bodyParser = require('body-parser');
const port = 4003;
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated'){
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        }).catch((err) => {
            console.log(err.message);
          });
    }
// A repsonse is needed or it will hang, empty response will suffice
    res.send({});
});

app.listen(port, () => {
    console.log('Listening on 4003');
});