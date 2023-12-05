function calcular() {
  const inputNumero = document.getElementById('numero');
  const resultadoElemento = document.getElementById('resultado');

  const numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    const sucessor = numero + 1;
    const antecessor = numero - 1;
    const parImpar = numero % 2 === 0 ? 'Par' : 'Ímpar';

    const resultado = `Sucessor: ${sucessor}, Antecessor: ${antecessor}, ${parImpar}`;
    resultadoElemento.textContent = resultado;
  } else {
    resultadoElemento.textContent = 'Por favor, digite um número válido.';
  }
}

