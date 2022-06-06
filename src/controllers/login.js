login.botao.addEventListener('click',(event)=>{
    event.preventDefault()
    verificaCampos(login)
})
function verificaCampos(login){
    if (Validacao.validacoes(login)){
        location.replace('../../../index.html')
    }
}