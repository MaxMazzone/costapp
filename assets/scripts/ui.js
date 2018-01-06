const calcSuccess = function (data) {
  $('#message').text('you did it!')
}
const calcFailure = function () {
  console.log('you failed somehow')
}

module.export = {
  calcSuccess,
  calcFailure
}
