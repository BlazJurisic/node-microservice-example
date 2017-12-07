const convict = require('convict');

const config = convict({
    port: {
        doc: 'The port this service is going to listen on.',
        format: 'port',
        default: '8960',
        env: 'REGISTRATION_PORT'
    },
    'check-password': {
        uri: {
            doc: 'The URI to the Check Password Microservice.',
            format: String,
            default: 'localhost:8970',
            env: 'REGISTRATION_CHECK_PASSWORD_URI'
        }
    },
    'check-username': {
        uri: {
            doc: 'The URI to the Check Username Microservice.',
            format: String,
            default: 'localhost:8980',
            env: 'REGISTRATION_CHECK_USERNAME_URI'
        }
    }
});

config.validate({ allowed: 'strict' });

module.exports = config;
