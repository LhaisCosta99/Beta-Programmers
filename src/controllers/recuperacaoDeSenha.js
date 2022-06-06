recuperacaoDeSenha.botao.addEventListener("click", (event)=>{
    event.preventDefault()
    if(Validacao.validaEmail(recuperacaoDeSenha.email.value)){
        alert("link para recuperação de senha enviado com sucesso!")
        location.replace("./login.html")
    } else {
        Validacao.verificaCampos(recuperacaoDeSenha)
    }
})