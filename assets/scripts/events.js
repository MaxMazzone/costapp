const getFormFields = require(`../../lib/get-form-fields`)
const store = require('./store')
// const ui = require('./ui')
let amountOwed = 0

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
  amountOwed = costPerMl * amtUsed
  amountOwed = +amountOwed.toFixed(2)
  console.log('You owe $' + amountOwed)
  $('#message').text('You owe $' + amountOwed)
  $('#costModal').modal('toggle')
  $('#calc').trigger('reset')
}

const onCalculate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  let amtUsed = data.amtUsed * 1
  let sizeOfBottle = data.sizeOfBottle * 1
  if (data.usedUnit === 'oz') {
    amtUsed = amtUsed * 29.57
  }
  if (data.bottleUnit === 'oz') {
    sizeOfBottle = sizeOfBottle * 29.57
  }
  if (amtUsed > sizeOfBottle) {
    console.log('amount used cannot exceed size of bottle')
    const alertMessage = $('#amountTooLargeMessage')
    alertMessage.removeClass('hide')
    alertMessage.fadeTo(3000, 500).slideUp(500, function () {
      alertMessage.slideUp(500)
    })
  } else if (data.costOfBottle > 0 && sizeOfBottle > 0) {
    alcoholCostml(data)
  } else {
    console.log('Incorrect or incomplete information')
    const alertMessage = $('#incorrectInformationMessage')
    alertMessage.removeClass('hide')
    alertMessage.fadeTo(3000, 500).slideUp(500, function () {
      alertMessage.slideUp(500)
    })
  }
}

const addIngredientToTotal = function (event) {
  event.preventDefault()
  store.total = +store.total.toFixed(2)
  store.total += amountOwed
  $('#drinkCost').text(store.total)
  console.log(store.total)
}
const clearDrinkCost = function () {
  $('#drinkCost').text('0')
  store.total = 0
}

const addHandlers = function () {
  $('#calc').on('submit', onCalculate)
  $('#modalAddIngredient').on('click', addIngredientToTotal)
  $('#drink-cost-clear').on('click', clearDrinkCost)
}

module.exports = {
  addHandlers
}
