'use strict'
const { validate } = use('Validator')
const Database = use('Database')
const User = use('App/Models/User')

class UserController {

    async getAll ({response}){
        response.send(await Database.table('users').select('*'))
    }

    async getUser({ auth, params, response }){

        // query params validation
        // userId must be integer value
        const rules = {
            userId: 'integer'
        }
      
        const validation = await validate(params, rules)

        if (validation.fails()) {      
            response.send({"message": "Not a number provided"});
            return
        }

        // user can only see his personal info
        if(auth.user.id != parseInt(params.userId)){
            response.send({"message": "Can not see someone else's info"})
            return
        }
      
        // send back info
        const obj = await Database.table('users').where('id', '=', params.userId);

        response.type('application/json')
        response.send(obj);
    }

}

module.exports = UserController
