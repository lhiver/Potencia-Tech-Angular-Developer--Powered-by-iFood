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

const rodrigo = new pessoa('Rodrigo Souza Pereira',28);
const luanna = new pessoa('Luanna Dias santana', 26);

rodrigo.descrever();
luanna.descrever();

console.log(rodrigo);