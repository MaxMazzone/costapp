const getFormFields = require(`../../lib/get-form-fields`)
// const ui = require('./ui')

const alcoholCost = function (costOfBottle, sizeOfBottleMl, amtUsedMl) {
  const costPerMl = costOfBottle / sizeOfBottleMl
  let amountOwed = costPerMl * amtUsedMl
  amountOwed = +amountOwed.toFixed(2)
  console.log('You owe $' + amountOwed)
  $('#message').text('You owe $' + amountOwed)
  $('#calc').trigger('reset')
}

const onCalculateSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  alcoholCost(data.costOfBottle, data.sizeOfBottleMl, data.amtUsedMl)
}

const addHandlers = function () {
  $('#calc').on('submit', onCalculateSuccess)
}

module.exports = {
  addHandlers
}
