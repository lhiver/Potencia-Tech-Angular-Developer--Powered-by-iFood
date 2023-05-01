const rodrigo = {
    nome: 'Rodrigo Souza Pereira',
    idade: 28
};

/*incrementar objeto */
rodrigo.altura = 1.78;
console.log(rodrigo);

/*deletar objeto*/
delete rodrigo.nome;
console.log(rodrigo);

/* usando interpolação */
const pessoa = {
    nome: 'luana',
    idade: 26,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);      
}
};

pessoa.descrever();