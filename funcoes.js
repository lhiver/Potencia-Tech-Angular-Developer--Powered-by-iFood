function saymyname(name){
    console.log('your name is ' + name);
}

saymyname('Rodrigo');

function imc(peso, altura){
    const calculo = peso / Math.pow(altura,2);
    return peso / altura;
}

console.log(imc(66,1.78));