'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * UserTransformer class
 *
 * @class UserTransformer
 * @constructor
 */
class UserTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     // add your transformation object here
     id: model.id,
     username: model.username,
     email: model.email
    }
  }
}

module.exports = UserTransformer