function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = (valorEmDolar * 5.49).toFixed(2);

  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
