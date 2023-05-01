class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas (pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade){
        console.log(`O ${pessoa1.nome} é mais velho do que ${pessoa2.nome}.`);
    }
    else if (pessoa2.idade > pessoa1.idade){
        console.log(`A ${pessoa2.nome} é mais velha do que ${pessoa1.nome}.`)
    }
    else{
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`);
    }
}

const rodrigo = new pessoa ('Rodrigo Souza Pereira', 28);
const luanna = new pessoa('Luanna Dias Ferreira',26);

compararPessoas(rodrigo,luanna);