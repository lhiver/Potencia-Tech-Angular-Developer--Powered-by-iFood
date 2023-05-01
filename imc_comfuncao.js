function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc <18.5){
     return 'voce está abaixo do peso';
    }
    else if (imc >=18.5 && imc <=25){
     return 'O seu peso é normal';
    }
    else if(imc > 25 && imc <30){
     return 'voce está acima do peso';
    }
    else if (imc >= 30 && imc <=40) {
     return 'voce está obeso';
    }
    else {
     return 'voce está com obesidade grave';
    }
}

function main (){
    const peso = 66;
    const altura = 1.78;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
main();