const calcSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully Signed Up!')
  $('#message').text('you did it!')
}
const calcFailure = function () {
  console.log('you failed somehow')
}

module.export = {
  calcSuccess,
  calcFailure
}
