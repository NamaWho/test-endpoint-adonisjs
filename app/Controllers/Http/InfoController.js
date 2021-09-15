'use strict'

class InfoController {
    /**
     * [Validator: 'guest']
     * Gets backend version retrieved by package.json file
     */
    backend({ response }){
        // retrieve info
        try {
            const { name, version } = require('../../../package.json')
        } catch (error) {
            response.serviceUnavailable('Service Unavailable')
        }
        
        const obj = {
            "name" : name,
            "version" : version
        }
        
        // send back JSON object
        return obj
    }
}

module.exports = InfoController
