'use strict'

const User = use('App/Models/User');

class AuthController {

  /**
   * [Validator: 'Login']
   * [Middleware: 'guest']
   * Logs in an existent user, returning his jwt for next calls
   */
  async login({request, response, auth}) {
    const {email, password} = request.only(['email', 'password'])
    let user 

    // ensure there's already an instance with given email
    // if it's there, then save user info
    try {
      user = await User.findByOrFail('email', email)
    } catch (e) {
      return response.unprocessableEntity()
    }

    try {
      if (await auth.attempt(email, password)) {
        // generate jwt
        const token = await auth.generate(user)

        // parse object to return
        let obj = {
          "code" : "success",
          "user_id" : user.id,
          "access_token" : token
        }

        return obj
      }
    }
    catch (e) {
      return {message: 'Not yet registered'}
    }
  }
}

module.exports = AuthController
