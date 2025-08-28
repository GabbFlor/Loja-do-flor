var btnAdd = document.querySelector("#adicionar-encomenda");
var form = document.querySelector("#form-encomenda");
var tabela = document.querySelector("#table");


btnAdd.addEventListener("click", function(e) {
    e.preventDefault();

    // arrays que usei nos for's para economizar linha
    let formValues = [
        form.nome.value,
        form.select_tipo.value,
        form.especificacao.value,
        form.valor_un.value,
        form.qtd.value
    ]
    let dicionario = [
        "nome",
        "tipo",
        "espec",
        "valorUn",
        "qtd",
        "total"
    ]

    // coleta a linha atual para n fazer cunfusao com as classes
    var linhaAtual = document.querySelectorAll(".cliente").length + 1;
    console.log(`linha : ${linhaAtual}`)

    // cria a linha
    trNova = tabela.appendChild(document.createElement("tr"))
    trNova.classList.add("cliente")

    // vai criando as td's
    for(let i = 0; i < 6; i++) {
        let tdNovo = document.createElement("td")
        tdNovo.classList.add(dicionario[i]);
        tdNovo.classList.add(linhaAtual)

        trNova.appendChild(tdNovo);
    }

    // adiciona os valores digitados um por um nos td's
    for(let i = 0; i < 5; i++) {
        let teste = document.querySelector(`.${dicionario[i]}${linhaAtual}`);

        console.warn(`.${dicionario[i]} ${linhaAtual}`)
        console.warn(teste)

        console.log(`Classe = ${dicionario[i]} | Valor = ${formValues[i]}`)
    }
})