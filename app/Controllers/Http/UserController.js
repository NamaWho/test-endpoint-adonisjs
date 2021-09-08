'use strict'
const { validate } = use('Validator')
const Database = use('Database')
const User = use('App/Models/User')

class UserController {

    
    /**
     * [DEV_ONLY]
     * Returns all the users
     */ 
    async getAll ({response}){
        response.type('application/json')

        response.send(await Database.table('users').select('*'))
    }

    /**
     * Returns user info
     * User must provide his jwt token in order to view his personal details
     */
    async getUser({ auth, params, response }){
        response.type('application/json')

        // query params validation
        // userId must be integer value
        const rules = {
            userId: 'integer'
        }
      
        const validation = await validate(params, rules)

        if (validation.fails())
            return response.send({"message": "Not a number provided"})

        // user can only see his personal info
        if(auth.user.id != parseInt(params.userId))
            return response.send({"message": "Can not see someone else's info"})
      
        // send back info
        const obj = await Database.table('users').where('id', '=', params.userId)

        response.send(obj);
    }

}

module.exports = UserController
