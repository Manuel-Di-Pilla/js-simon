$(document).ready(
  function () {
    var numeriCasuali = [];
    var numeriScelti = [];
    var num;
    random(numeriCasuali);
    setTimeout(selection(num, numeriCasuali, numeriScelti), 3000)
  }
);

function random(numbers) {
  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random()* 100 + 1);
    numbers.push(random);
  }
  console.log(numbers);
  alert(numbers);
}
function selection(numero, numbers, userNumbers) {
  for (var i = 0; i < 5; i++) {
    numero = parseInt(prompt('inserisci un numero'));
    if(numbers.includes(numero) == true) {
      userNumbers.push(numero);
    }
  }
  console.log(userNumbers);
  console.log('hai indovinato' + ' ' + userNumbers.length + ' ' + 'numeri');
}
