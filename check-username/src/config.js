const convict = require('convict');

const config = convict({
    port: {
        doc: 'The port this service is going to listen on.',
        format: 'port',
        default: '8980',
        env: 'CHECK_USERNAME_PORT'
    },
    user: {
        uri: {
            doc: 'The URI to the User Entity Service.',
            format: String,
            default: 'localhost:8990',
            env: 'CHECK_USERNAME_USER_URI'
        }
    }
});

config.validate({ allowed: 'strict' });

module.exports = config;
