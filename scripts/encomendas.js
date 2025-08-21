// seleciona e armazenas todas as linhas da tabela em um array
let clientes = document.querySelectorAll(".cliente");

// for que percorre o array
for (let count=0; count < clientes.length; count++) {
    // seleciona a quantidade e valor unitario de cada linha
    let qtd = parseInt(clientes[count].querySelector(".qtd").textContent);
    let valorUn = parseInt(clientes[count].querySelector(".valorUn").textContent);
    let produtoValido = true;
    
    // verifica o valor de "qtd", se for inválido informa na tabela, se não calcula o total
    if(qtd < 1 || isNaN(qtd)) {
        clientes[count].querySelector(".qtd").style.color = "red";
        clientes[count].querySelector(".qtd").textContent = "Quantidade inválida!";

        produtoValido = false;
    } else if(valorUn < 1 || isNaN(valorUn)) {
        clientes[count].querySelector(".valorUn").style.color = "red";
        clientes[count].querySelector(".valorUn").textContent = "Valor inválido!";

        produtoValido = false;
    }

    if (produtoValido) {
        clientes[count].querySelector(".total").textContent = calculoTotal(qtd, valorUn)
    } else {
        clientes[count].querySelector(".total").textContent = 0;
        clientes[count].querySelector(".total").style.color = "red";
    }
}


function calculoTotal(qtdCalc, valorCalc) {
    // inicia a variavel como um inteiro para evitar problemas
    total = qtdCalc + valorCalc;

    return total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}