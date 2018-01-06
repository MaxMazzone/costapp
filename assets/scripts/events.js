const getFormFields = require(`../../lib/get-form-fields`)
// const ui = require('./ui')

const alcoholCostml = function (formData) {
  let amtUsed = formData.amtUsed
  let sizeOfBottle = formData.sizeOfBottle
  if (formData.usedUnit === 'oz') {
    amtUsed = amtUsed * 29.57
  }
  if (formData.bottleUnit === 'oz') {
    sizeOfBottle = sizeOfBottle * 29.57
  }
  const costPerMl = formData.costOfBottle / sizeOfBottle
  let amountOwed = costPerMl * amtUsed
  amountOwed = +amountOwed.toFixed(2)
  console.log('You owe $' + amountOwed)
  $('#message').text('You owe $' + amountOwed)
  $('#calc').trigger('reset')
}

const onCalculate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  if (data.costOfBottle > 0 && data.sizeOfBottle > 0) {
    alcoholCostml(data)
  } else {
    $('#message').text('incomplete form or incorrect information')
  }
}

const addHandlers = function () {
  $('#calc').on('submit', onCalculate)
}

module.exports = {
  addHandlers
}
