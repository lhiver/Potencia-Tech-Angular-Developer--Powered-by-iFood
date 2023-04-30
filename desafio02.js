/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const preco_etanol = 4.68;
const preco_gasolina = 5.71;
const km_por_litros = 10;
const distancia_em_km = 100;
const tipo_combustivel = 'gasolina';

const consumoporlitro = distancia_em_km / km_por_litros;

if (tipo_combustivel === 'etanol') {
    console.log('etanol foi selecionado');
    const valor_final = consumoporlitro * preco_etanol;
    console.log(valor_final.toFixed(2));
}
else{
    console.log('gasolina foi selecionada');
    const valor_final = consumoporlitro * preco_gasolina;
    console.log(valor_final.toFixed(2));
}

