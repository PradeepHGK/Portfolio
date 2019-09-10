let CounterCheck = 0
console.log(CounterCheck)

function FirstFunction () {
  console.log('Hello First Function in JS')
  CounterCheck++
}

const buttonVar = document.querySelector('#NewButton')

buttonVar.addEventListener('click', FirstFunction, false)

console.log(CounterCheck)
