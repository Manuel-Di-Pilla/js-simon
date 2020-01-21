$(document).ready(
  function () {
    console.log(numeriCasuali);
    alert(numeriCasuali);
    setTimeout(selection, 3000);
  }
);
var numeriCasuali = random(5);
function random(numeriDaGenerare) {
  var numbers = [];
  for (var i = 0; i < numeriDaGenerare; i++) {
    var random = Math.floor(Math.random()* 100 + 1);
    numbers.push(random);
  }
  return numbers
}

function selection() {
  var userNumbers = [];
  for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt('inserisci un numero'));
    if(numeriCasuali.includes(numero) == true) {
      userNumbers.push(numero);
    }
  }
  console.log(userNumbers);
  console.log('hai indovinato' + ' ' + userNumbers.length + ' ' + 'numeri');
}
