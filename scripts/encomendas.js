// seleciona e armazenas todas as linhas da tabela em um array
let clientes = document.querySelectorAll(".cliente");
let table = document.querySelector("#table")

// Array dos produtos
let produtos = [
    {
        "nome": "RTX 4080",
        "tipo": "Placa de vídeo",
        "espec": "Placa de vídeo focada em alta performance para jogos.",
        "valorUn": 11000,
        "qtd": 4,
        "valor": 0,
    },
    {
        "nome": "I9 13900k",
        "tipo": "Processador",
        "espec": "Processador de uso profissional focado para joos e tarefas de alta performance.",
        "valorUn": -4000,
        "qtd": 2,
        "valor": 0,
    },
    {
        "nome": "Asus Tuf Gaming Z790",
        "tipo": "Placa mãe",
        "espec": "Placa mãe com o soquete LGA1700, perfeito para portar o I9 13900k",
        "valorUn": 2500,
        "qtd": 0,
        "valor": 0,
    }
]

produtos.map(function(produto, i) {
    let produtoValido = true;

    // Gerando a linha do produto
    trNova = table.appendChild(document.createElement("tr"));
    trNova.classList.add("cliente");


    // criando as tags "td"
    tdNome = trNova.appendChild(document.createElement("td"));
    tdNome.classList.add("nome");
    tdTipo = trNova.appendChild(document.createElement("td"));
    tdTipo.classList.add("tipo");
    tdEspec = trNova.appendChild(document.createElement("td"));
    tdEspec.classList.add("espec");
    tdValorUn = trNova.appendChild(document.createElement("td"));
    tdValorUn.classList.add("valorUn");
    tdQtd = trNova.appendChild(document.createElement("td"));
    tdQtd.classList.add("qtd");
    tdValor = trNova.appendChild(document.createElement("td"));
    tdValor.classList.add("valor");
    

    // adicionando o valor do produto dentro das tags "td"
    tdNome.textContent = produto.nome;
    tdTipo.textContent = produto.tipo;
    tdEspec.textContent = produto.espec;
    tdValorUn.textContent = produto.valorUn;
    tdQtd.textContent = produto.qtd;


    // verificando e formatando a linha
    if(produto.qtd < 1 || isNaN(produto.qtd)) {
        tdQtd.textContent = "Quantidade inválida!";

        produtoValido = false;
    } else if(produto.valorUn < 1 || isNaN(produto.valorUn)) {
        tdValorUn.textContent = "Valor inválido!";

        produtoValido = false;
    }

    if (produtoValido == false) {
        trNova.classList.add("valor-invalido")
        tdValor.textContent = 0;
    } else {
        tdValor.textContent = calculoTotal(produto.qtd, produto.valorUn);
    }
})

function calculoTotal(qtdCalc, valorCalc) {
    // inicia a variavel como um inteiro para evitar problemas
    total = qtdCalc + valorCalc;

    return total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}