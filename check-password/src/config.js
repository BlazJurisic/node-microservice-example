const convict = require('convict');

const config = convict({
    port: {
        doc: 'The port this service is going to listen on.',
        format: 'port',
        default: '8970',
        env: 'CHECK_PASSWORD_PORT'
    }
});

config.validate({ allowed: 'strict' });

module.exports = config;
