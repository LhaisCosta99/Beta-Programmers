cadastro.cep.addEventListener('blur',()=>{
    //event.preventDefault()
    try {
        if(Validacao.validaCep(cadastro.cep.value)){
            requisicaoParaApi(cadastro.cep.value)
        }
        else{
            throw new Error("CEP inválido!")
        }
    } catch (error) {
        console.log(error)
    }
})

function requisicaoParaApi(cep){
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET', 
        success(resposta){
            if(resposta.uf){
                const endereco = new Endereco(
                    resposta.logradouro,
                    resposta.bairro,
                    resposta.localidade,
                    resposta.uf
                )
                preenchimentoAutomatico(cadastro,endereco)
            }
            else{
                throw new Error('Objeto de resposta vazio!')
            }
        }
    })
}

cadastro.botao.addEventListener('click',(event)=>{
    event.preventDefault()
    Validacao.verificaCampos(cadastro)
})