const config = require('./config');

const express = require('express');
const app = express();

const validatorChain = require('./validator-chain');

app.use(express.json());

app.post('/password/check', function checkPasswordHandler(req, res) {
    const { password, passwordAgain } = req.body;

    const validationResults = validatorChain(password, passwordAgain);

    if (validationResults.length == 0) {
        res.sendStatus(204);
    } else {
        res.status(400).json({ errors: validationResults });
    }
});

app.listen(config.get('port'));
