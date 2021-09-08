'use strict'

class InfoController {
    /**
     * Gets backend version retrieved by package.json file
     */
    backend({ response }){
        // retrieve info
        const { name, version } = require('../../../package.json');
        const obj = {
            "name" : name,
            "version" : version
        }

        // header 
        response.type('application/json')
        
        // send back JSON object
        response.send(obj);
    }
}

module.exports = InfoController
