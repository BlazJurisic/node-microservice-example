module.exports = function isTheSameConstraint(password, passwordAgain) {
    if (password && password === passwordAgain) {
        return undefined;
    } else {
        return {
            message: 'The passwords do not match!'
        };
    }
};
