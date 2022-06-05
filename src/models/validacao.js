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
    
    static validacoes(objeto){
        const objetoArr = Object.entries(objeto)
        const validados = []
        objetoArr.forEach((elemento)=>{
            let chave = elemento[0]
            let valor = elemento[1]
            
            switch (chave) {
                case 'nome':
                    validados.push(this.validaNome(valor.value))
                    if (!this.validaNome(valor.value)) valor.style.color = 'red'
                    if (this.validaNome(valor.value)) valor.style.color = 'green'
                    break;
                case 'sobrenome':
                    validados.push(this.validaNome(valor.value))
                    if(!this.validaNome(valor.value)) valor.style.color = 'red'
                    if (this.validaNome(valor.value)) valor.style.color = 'green'
                    break;
                case 'cpf':
                    validados.push(this.validaCpf(valor.value))
                    if(!this.validaCpf(valor.value)) valor.style.color = 'red' 
                    if (this.validaCpf(valor.value)) valor.style.color = 'green'
                    break;
                case 'cep':
                    validados.push(this.validaCep(valor.value))
                    if (!this.validaCep(valor.value)) valor.style.color = 'red'
                    if (this.validaCep(valor.value)) valor.style.color = 'green'
                    break;
                case 'complemento':
                case 'botao':
                    validados.push(true)
                    break;
                default:
                    if(valor.value == ''){
                        valor.style.color = 'red'
                        validados.push(false)
                        break;
                    }
                    valor.style.color = 'green'
                    validados.push(true)
                    break;
            }
        })
        let retorno = !validados.includes(false)
        return retorno
    }
}