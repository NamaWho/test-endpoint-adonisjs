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
}

module.exports = Login
