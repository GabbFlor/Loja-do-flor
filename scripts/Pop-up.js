function show_pop_up(img, titulo, descricao) {
    // colocando os valores recebidos pela função no elemento html do pop-up
    document.getElementById("pop-up-img").src = img;
    document.getElementById("pop-up-title").textContent = titulo;
    document.getElementById("pop-up-text").textContent = descricao;

    // Adicionando o overlay (escurecer o fundo)
    document.querySelector(".overlay").classList.remove("hidden-element");

    // Tirando a classe "hidden-pop-up" para deixa-lo visivel com as novas informações
    document.querySelector(".pop-up").classList.remove("hidden-element");

    // Removendo a barra de rolagem da tela inteira
    document.body.style.overflowY = "hidden"
}

function hidden_pop_up() {
    // Retirando o overlay
    document.querySelector(".overlay").classList.add("hidden-element");

    // Retirando a classe "hidden-pop-up"
    document.querySelector(".pop-up").classList.add("hidden-element");

    // Adicionando a barra de rolagem da tela inteira
    document.body.style.overflowY = "auto"
}