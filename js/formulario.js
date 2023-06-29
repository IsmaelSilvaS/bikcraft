const formulario = document.querySelector("form");

function enviarFormulario(event){
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando...";

    setTimeout(function(){
        botao.innerText = "Não há conexão com servidor."
    }, 2000);
}

formulario.addEventListener('submit', enviarFormulario);