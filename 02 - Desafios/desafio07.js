/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
 */

class pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calculoIMC();  
    }

    calculoIMC (){
        return this.peso / (this.altura * this.altura);
    }
    
    classificarIMC(){
        const imc = this.imc;
        if (imc <18.5){
            return ('Voce está abaixo do peso');
        }
        else if (imc >=18.5 && imc <=25){
            return('O seu peso é normal');
        }
        else if(imc > 25 && imc <30){
            return ('Voce está acima do peso');
        }
        else if(imc >= 30 && imc <=40){
            return('Voce está obeso');
        }
        else {
            return('Voce está com obesidade grave');
        }
    }

    descrever (){
        console.log(`${this.nome} tem ${this.peso} KG e ${this.altura} de altura e o seu imc é ${this.imc.toFixed(2)}. ${this.classificarIMC()}`);
    }
}

const jose = new pessoa ('José',70,1.75);
const rebeca = new pessoa ('Rebeca',61,1.68);
const lorena = new pessoa('Lorena', 35,1.65);

jose.descrever();
rebeca.descrever();
lorena.descrever();
