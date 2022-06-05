class Validacao {
    static validaNome(nome){
        if(nome.length >= 3){
            return true
        }
        else{
            return false
        }
    }
    static validaEmail(email){
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regex.test(email) 
    }
    static validaCpf(cpf){
        if(cpf.length == 11){
            return true
        }
        else{
            return false
        }
    }
    static validaCep(cep){
        if(cep.length == 8){
            return true
        }
        else{
            return false
        }
    }
    static validaTelefone(telefone){
        if(telefone.length == 11){
            return true
        }
        else{
            return false
        }
    }
}
