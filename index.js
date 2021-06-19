const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000...'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore({ filename: 'database.db', autoload: true});

app.get('/api', (request, response) => {
    database.find({}, (err, members) => {
        response.json(members);
    });
})

app.post('/api', (request, response) => {
    console.log('Post request received');
    const data = request.body;
    database.insert(data);

    response.json({
        status: "success"
    });
})

app.put('/api', (request, response) => {
    const member = request.body;
    database.update({ _id: member._id }, member, {}, function(err) {
        response.json(member);
    });
})