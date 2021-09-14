'use strict'
const isAdmin = use('App/Validators/isAdmin')

class CreateUser extends isAdmin {
  get rules () {
    return {
      // validation rules
      username: 'required|string|max:80',
      email: 'required|email|max:254',
      password: 'required|max:60',
      is_admin: 'boolean'
    }
  }
}

module.exports = CreateUser
