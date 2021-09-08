'use strict'

const User = use('App/Models/User');

class AuthController {

  /**
   * [DEV_ONLY]
   * Register a new user in the database
   */
  async register({request, response}) {
    let user = await User.create(request.all())
    return response.json(user)
  }

  /**
   * Logs in an existent user, returning his jwt for next calls
   */
  async login({request, auth, response}) {
    response.type('application/json')

    const {email, password} = request.all();

    try {
      if (await auth.attempt(email, password)) {
        // get user info, by unique field 'email'
        let user = await User.findBy('email', email)
        // generate jwt
        let token = await auth.generate(user)

        // parse object to return
        let obj = {
          "code" : "success",
          "user_id" : user.id,
          "access_token" : token
        }

        return response.send(obj)
      }
    }
    catch (e) {
      return response.send({message: 'Not yet registered'})
    }
  }
  
}

module.exports = AuthController