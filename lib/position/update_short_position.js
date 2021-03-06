'use strict'

const updatePosition = require('./update_position')

/**
 * Updates a short position (negates passed amount)
 *
 * @param {Object} state
 * @param {Object} orderParams
 * @param {number} orderParams.amount - required
 * @return {Object} nextState
 */
module.exports = async (state = {}, orderParams = {}) => {
  const { amount } = orderParams

  return updatePosition(state, {
    ...orderParams,
    amount: -amount
  })
}
