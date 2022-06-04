const cadastro = new Cadastro(
    document.getElementById('nome'),
    document.getElementById('sobrenome'),
    document.getElementById('cpf'),
    document.getElementById('nascimento'),
    document.getElementById('cep'),
    document.getElementById('rua'),
    document.getElementById('bairro'),
    document.getElementById('cidade'),
    document.getElementById('estado'),
    document.getElementById('pais'),
    document.getElementById('botao')
)


function preenchimentoAutomatico(cadastro, endereco){
    cadastro.rua.value = endereco.rua
    cadastro.bairro.value = endereco.bairro
    cadastro.cidade.value = endereco.cidade
    cadastro.estado.value = endereco.estado
    cadastro.pais.value = endereco.pais
}
