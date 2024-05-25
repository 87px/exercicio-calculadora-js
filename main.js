document.getElementById("resultado").onclick = function() {
    let num1 = Number(document.getElementById("numero1").value); // Convertendo para Number e pegando o valor;
    let num2 = Number(document.getElementById("numero2").value); // Convertendo para Number e pegando o valor;

    document.getElementById("resultadoSoma").textContent = `O valor da soma é ${num1 + num2}`; // Somando e exibindo o resultado;
}

