
firstNumber=prompt("Veuillez saisir votre pointure");
secondNumber=prompt("Veuillez aussi saisir votre année de naissance");
var a=parseFloat(firstNumber);
var b=parseInt(secondNumber);
var c=((((2*a)+5)*50)-b)-1766;
alert(c);
