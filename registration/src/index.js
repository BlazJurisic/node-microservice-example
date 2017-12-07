const config = require('./config');

const got = require('got');

const express = require('express');
const app = express();

app.use(express.json());

app.post('/users/:username', function checkUsernameHandler(req, res) {
    const { password, passwordAgain } = req.body;

    checkIfUnique(req.params.username)
        .then(() => checkPasswords(password, passwordAgain))
        .then(() => res.sendStatus(201))
        .catch(error => {
            res.status(error.code).json(error.payload);
        });

    function checkIfUnique(username) {
        return got(`http://${config.get('check-username.uri')}/users/${username}/check`)
            .catch(() => {
                throw {
                    code: 409,
                    payload: {
                        message: 'This username is already taken!'
                    }
                };
            });
    }

    function checkPasswords(password, passwordAgain) {
        const checkPromise = got(`http://${config.get('check-password.uri')}/password/check`, { 
            method: 'POST',
            json: true,
            body: {
                password,
                passwordAgain
            }
        });

        return checkPromise.catch(error => {
                throw {
                    code: 400,
                    payload: {
                        message: 'The provided password is invalid.',
                        validationErrors: error.response.body.errors
                    }
                };
            });
    }
});

app.listen(config.get('port'));
