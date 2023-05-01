/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class carro {
    marca;
    cor;
    gastoPorKM;

    constructor(marca,cor,gastoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }

    descrever (){
        console.log(`O ${this.marca} tem a cor ${this.cor} e gasta ${this.gastoPorKM.toFixed(3)} por KM rodado.`)
    }

    calcularGastoDeViagem(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * this.gastoPorKM * precoCombustivel;
    }
}

const fusca = new carro('Fusca', 'amarela',1/12);
const sedan = new carro('Sedan', 'prata',1/35);
const palio = new carro('Palio', 'preta',1/40);

fusca.descrever();
sedan.descrever();
palio.descrever();

fusca.calcularGastoDeViagem(75,4.68);
console.log(fusca.calcularGastoDeViagem(75,4.68));
console.log(sedan.calcularGastoDeViagem(75,4.68));