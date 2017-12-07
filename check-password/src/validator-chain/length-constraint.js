const MIN_LENGTH = 6;

module.exports = function lengthConstraint(password) {
    if (password && password.length >= MIN_LENGTH) {
        return undefined;
    } else {
        return {
            message: 'The password is too short; it should be at least 6 characters long!'
        };
    }
};
