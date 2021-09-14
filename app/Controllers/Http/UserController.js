'use strict'
const User = use('App/Models/User')
const UserTransformer = use('App/Transformers/UserTransformer')

class UserController {

    
    /**
     * [Validator: 'Admin']
     * Returns all the users
     */ 
    async index({transform}){
        const users = await User.all()
        return transform.collection(users, UserTransformer)
    }

    /**
     * [Validator: 'CreateUser']
     * Register a new user in the database
     */
    async create({request, response}) {
        const userData = request.only(['username', 'email', 'password', 'is_admin'])

        // search for an existing instance with given username or email 
        if (await User.findBy('email', userData.email) || await User.findBy('username', userData.username))
            return response.unprocessableEntity()
        
        const user = await User.create(userData)
        return user
    }

    /**
     * [Validator: 'ShowUser']
     * Returns user info
     * User must provide his jwt token in order to view his personal details
     */
    async show({ auth, params }){

        // user can only see his personal info
        if(auth.user.id != parseInt(params.userId))
            return {"message": "Can not see someone else's info"}
      
        // send back info
        const obj = await User.query().where('id', '=', params.userId).setHidden(['password']).fetch()

        return obj
    }

}

module.exports = UserController
