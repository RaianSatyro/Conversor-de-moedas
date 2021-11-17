function Converter1() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = (valorEmDolar * 5.50).toFixed(2);

  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmDolar = (valorEmReal * 0.18).toFixed(2);

  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é $" + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}