class Cadastro {
    constructor(nome,sobrenome,cpf,nascimento,cep,rua,bairro,cidade,estado,pais,botao){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.nascimento = nascimento
        this.cep = cep
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.botao = botao
    }
}

class Login{
    constructor(email,senha,botao){
        this.email = email
        this.senha = senha 
        this.botao = botao
    }
}

class RecuperacaoDeSenha{
    constructor(email,botao,mensagem){
        this.email = email
        this.botao = botao
    }
}