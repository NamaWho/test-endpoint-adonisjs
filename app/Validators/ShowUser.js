'use strict'

class ShowUser {
  get rules () {
    return {
      // validation rules
      userId : 'integer'
    }
  }

  get messages () {
    return {
      'userId.integer': 'This field must be <integer> type.'
    }
  }

  // Retrieve query parameter to be checked by get rules ()
  // Otherwise userId wouldn't be visibile since it's not in the request body
  get data () {
    const {userId} = this.ctx.params
    
    return userId
  }

  async fails (errorMessages) {
    this.ctx.response.unprocessableEntity('Unprocessable Entity')
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = ShowUser
