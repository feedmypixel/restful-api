'use strict';

module.exports = {
    application: {
        name: 'RESTful-web-API',
        port: 8091,
        cookie: {
            secret: 'myCatLovesChips' //TODO see Security section in README
        },
        session: {
            secret: 'IalsoAdoreChips' //TODO see Security section in README
        }
    }
}
