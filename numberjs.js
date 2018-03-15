var number = Math.floor((Math.random() * 100) + 1);
console.log (number);
while (guess!=number) {
  var guess = prompt ("Indovina il numero");
  if (guess==number) {
    result = "Hai indovinato!"
  }
  else if (guess<number) {
    alert ("Il numero da indovinare è più grande");
  }
  else {
    alert ("Il numero da indovinare è più piccolo");
  }
}

document.write (result);
