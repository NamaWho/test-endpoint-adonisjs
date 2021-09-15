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

  get messages () {
    return {
      'username.required': 'You must provide a username.',
      'username.string': 'This field must be <string> type',
      'username.max': 'This string is too long (max 80)',
      'email.required': 'You must provide an email address.',
      'email.email': 'You must provide a valid email address.',
      'email.max': 'This email is too long (max 254)',
      'password.required': 'You must provide a password',
      'password.max': 'This password is too long (max 60)',
      'is_admin.boolean': 'This field must be <boolean> type'
    }
  }

  async fails (errorMessages) {
    this.ctx.response.unprocessableEntity('Unprocessable Entity')
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = CreateUser
