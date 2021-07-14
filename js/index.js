function verificar() {
    var input = document.getElementById('numero');
    var valor_input = input.value;
    var mensagem = document.getElementById('msg');
    var mensagem_pai = mensagem.parentElement;
    try {
        if (valor_input == '') { throw 'Informe um valor.' }
        if(isNaN(valor_input)){ throw 'Opa, você não inseriu um número'}

        if(valor_input > 10 && valor_input < 20){
            mensagem.innerText = "Parabéns, você está correto!";
            mensagem_pai.className = "alert alert-success";
        }
        else{
            mensagem.innerText = "Opa, esse número não está no intervalo esperado.";
            mensagem_pai.className = "alert alert-danger";
        }
    }
    catch (erro) {
        mensagem.innerText = "Erro:" + erro;
        mensagem_pai.className = "alert alert-danger";
    }
    finally {
        mensagem_conclusao = document.getElementById('conclusao');
        mensagem_conclusao.innerText = "Obrigado por participar.";
        mensagem_conclusao.className = "alert alert-primary";
    }

    input.value = ""
}