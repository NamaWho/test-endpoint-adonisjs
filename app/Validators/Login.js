'use strict'
const Guest = use('App/Validators/Guest')

class Login {
  get rules () {
    return {
       // validation rules
       email: 'required|email|max:254',
       password: 'required|max:60'
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.max': 'This email is too long (max 254)',
      'password.required': 'You must provide a password',
      'password.max': 'This password is too long'
    }
  }

  async fails (errorMessages) {
    this.ctx.response.unprocessableEntity('Unprocessable Entity')
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Login
