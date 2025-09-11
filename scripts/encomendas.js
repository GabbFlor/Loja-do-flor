// seleciona e armazenas todas as linhas da tabela em um array
let clientes = document.querySelectorAll(".cliente");
let table = document.querySelector("#table")
var btnAdd = document.querySelector("#adicionar-encomenda");
var btnLimpar = document.querySelector("#limpar-form")
var form = document.querySelector("#form-encomenda");

// Array dos produtos
let produtos = [
    {
        "id": 1,
        "nome": "RTX 4080",
        "tipo": "Placa de vídeo",
        "espec": "Placa de vídeo focada em alta performance para jogos.",
        "valorUn": 11000,
        "qtd": 4,
        "valor": 0,
    },
    {
        "id": 2,
        "nome": "I9 13900k",
        "tipo": "Processador",
        "espec": "Processador de uso profissional focado para joos e tarefas de alta performance.",
        "valorUn": -4000,
        "qtd": 2,
        "valor": 0,
    },
    {
        "id": 3,
        "nome": "Asus Tuf Gaming Z790",
        "tipo": "Placa mãe",
        "espec": "Placa mãe com o soquete LGA1700, perfeito para portar o I9 13900k",
        "valorUn": 2500,
        "qtd": 0,
        "valor": 0,
    }
]

// renderiza a tabela com os valores padrão do array
atualizarTabela();

// dispara quando o btn de adicionar produto é pressionado
btnAdd.addEventListener("click", function(e) {
    e.preventDefault();

    let idAtual = produtos[produtos.length - 1].id + 1;

    // pega as infos do formulario, colocar em um objeto e insere no array
    produtos.push({
        id: idAtual,
        nome: form.nome.value,
        tipo: form.select_tipo.value,
        espec: form.especificacao.value,
        valorUn: form.valor_un.value,
        qtd: form.qtd.value
    });
    
    // atualiza a tabela para carregar o novo produto
    atualizarTabela();

    // limpa os inputs
    limparInputsForm();
})

// dispara quando o btn de limpar form é pressionado
btnLimpar.addEventListener("click", function() {
    limparInputsForm()
})

function deletarProduto(idProduto) {
    let confirmado = confirm(("teste"));

    if (confirmado) {
        // roda um filtro na tabela, deixando apenas os produtos que tem o id diferente do arg. da function
        produtos = produtos.filter(produto => produto.id != idProduto);

        atualizarTabela()
    }
}

function atualizarTabela() {
    // deleta todos os elementos do tbody para funcionar como um "atualizar"
    table.innerHTML = ""

    // console.log(produtos)

    produtos.map(function(produto, i) {
        let produtoValido = true;

        // Gerando a linha do produto
        trNova = table.appendChild(document.createElement("tr"));
        trNova.classList.add("cliente");
        trNova.id = produto.id;


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

        tdAcoes = trNova.appendChild(document.createElement("td"));

        // criando o btn de deletar
        btnDeletar = document.createElement("button")
        btnDeletar.classList.add("btn", "deletar")
        btnDeletar.addEventListener("click", () => deletarProduto(produto.id));
        btnDeletar.innerHTML = "deletar"

        // adicionando o btn de deletar na td
        tdAcoes.appendChild(btnDeletar)
        

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
}

function calculoTotal(qtdCalc, valorCalc) {
    // inicia a variavel como um inteiro para evitar problemas
    total = qtdCalc + valorCalc;

    return total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}

function limparInputsForm() {
    form.nome.value = "";
    form.select_tipo.value = "";
    form.especificacao.value = "";
    form.valor_un.value = "";
    form.qtd.value = "";
}