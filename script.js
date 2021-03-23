let number = document.getElementById('guess').value
let computer = Math.floor(Math.random() * 7) + 1;
// that sets the two numbers. one will be the value input by the user. the other will be randominised from 1- 6

document.getElementById('button').addEventListener('click', compare)

function compare () {
 if (number === computer) {
   document.getElementById('congrats').style.display = 'block'
 } else {
   document.getElementById('sorry').style.display = 'block'
 }
}
