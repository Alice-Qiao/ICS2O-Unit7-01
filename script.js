let number = document.getElementById('guess').value
let computer = Math.floor(Math.random() * 6) + 1;

document.getElementById('button').addEventListener('click', compare)

function compare () {
 if (number == computer) {
   document.getElementById('congrats').style.display = 'block'
 } else {
   document.getElementById('sorry').style.display = 'block'
 }
}
