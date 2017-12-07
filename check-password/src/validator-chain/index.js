const chain = [
    require('./length-constraint'),
    require('./is-the-same-constraint')
];

module.exports = function validate(password, passwordAgain) {
    return chain.reduce((results, validator) => {
        const result = validator(password, passwordAgain);

        if (result) {
            return [result].concat(results);
        } else {
            return results;
        }
    }, []);
};

