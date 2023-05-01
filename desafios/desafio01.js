/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const preco_combustivel = 5.48;
const km_por_litros = 10;
const distancia_em_km = 100;

const consumoporlitro = distancia_em_km / km_por_litros;

const valor_final = consumoporlitro * preco_combustivel;
console.log(valor_final.toFixed(2))