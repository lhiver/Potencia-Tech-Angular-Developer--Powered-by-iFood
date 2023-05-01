class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const rodrigo = new pessoa();
rodrigo.nome = 'Rodrigo Souza Pereira';
rodrigo.idade = 28;

const luana = new pessoa();
luana.nome = 'Luanna Dias Fereira';
luana.idade = 26;

console.log(rodrigo);
console.log(luana);