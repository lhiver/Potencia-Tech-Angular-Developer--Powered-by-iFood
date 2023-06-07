const num = 2;
const numeropar = (num % 2) === 0;
console.log(numeropar);

if(num === 0) {
    console.log('número invalido');
} else if (numeropar) {
    console.log('o número é par');
}
else{
    console.log('O número é impar');
}
