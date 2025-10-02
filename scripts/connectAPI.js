async function recuperarProdutos() {
    // CÓDIGO USANDO O XMLHttpRequest (não curto muito):
        // var conectaAPI = new XMLHttpRequest();
        // conectaAPI.open("GET", "http://localhost:3000/encomendas_web");
        // conectaAPI.addEventListener("load", function() {
        //     var response = conectaAPI.responseText;
        //     var novaEncomenda = JSON.parse(response);
        // });
        // conectaAPI.send();


    // CÓDIGO USANDO O FETCH:
    return fetch("http://localhost:3000/encomendas_web")
        .then(Response => Response.json());
}