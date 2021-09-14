'use strict'

class isAdmin {
  async authorize () {
    
    if (!this.ctx.auth.user.is_admin)
    {
      this.ctx.response.unauthorized('Not authorized')
      return false
    }
    
    return true
  }
}

module.exports = isAdmin
