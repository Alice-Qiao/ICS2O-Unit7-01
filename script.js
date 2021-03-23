const number = document.getElementById('guess').value
const computer = Math.floor(Math.random() * 7) + 1
// that sets the two numbers. one will be the value input by the user. the other will be randominised from 1- 6

document.getElementById('button').addEventListener('click', compare)
//will activate function compare when button is clicked

function compare () {
  if (number === computer) {
    document.getElementById('congrats').style.display = 'block'
} else {
    document.getElementById('sorry').style.display = 'block'
 }
}
//function means that if the two number as equal, it will show the congratulatory statement. If not, it will show the sorry statment
