const config = require('./config')

const got = require('got')

const express = require('express')
const app = express()

app.use(express.json())

app.get('/users/:username/check', function checkUsernameHandler(req, res) {
    checkIfExists(req.params.username)
        .then(exists => {
            if (exists) {
                res.sendStatus(409)
            } else {
                res.sendStatus(204)
            }
        });

    function checkIfExists(username) {
        return got(`http://${config.get('user.uri')}/users/${username}`)
            .then(() => true, () => false)
    }
});

app.listen(config.get('port'))
