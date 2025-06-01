var btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", function(e) {
    //evita de atualizar a pag no envio do form
    e.preventDefault();

    //pegando elementos relevantes do html
    let sectionForm = document.querySelector("#section-form-contato");
    let form = document.querySelector("#formulario");
    let sectionAgradecimento = document.querySelector("#section-agradecimento");
    let spanUsername = document.querySelector("#usernameMsg");

    //fazendo uma segunda verificacao se os itens do formulario estao todos preenchidos
    //por mais que tenha "required" nas tags, o usuario pode ir no inspecionar e tirar, e com essa verificacao ele e barrado
    if (
        form.nome.value == "" ||
        form.email.value == "" ||
        form.motivoContato.value == "" ||
        form.maisInfos.value == ""
    ) {
        alert("Preencha todos os campos do formulário.");
    } else {
        //escondendo a section do formulário
        sectionForm.classList.add("hidden-element");

        //mudando o nome do usuário na mensagem
        spanUsername.textContent = form.nome.value;

        //exibindo a section de agradecimento
        sectionAgradecimento.classList.remove("hidden-element");
    }
})