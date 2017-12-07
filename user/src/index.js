const config = require('./config');

const express = require('express');
const app = express();

const { userRepository } = require('./user-repository');

app.use(express.json());

app.get('/users/:username', function getUserHandler(req, res) {
    const user = userRepository.getUserByUsername(req.params.username);

    console.log(req.params.username);

    if (user == undefined) {
        res.sendStatus(404);
    } else {
        res.json(user);
    }
});

app.listen(config.get('port'));
