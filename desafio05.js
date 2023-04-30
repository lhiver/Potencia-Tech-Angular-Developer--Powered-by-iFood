/*
 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
const valor_produto = 100;
const a_vista = valor_produto * (1 - 0.1);
const Dinheiro_ou_pix = valor_produto * (1 - 0.15);
const duas_vezes = valor_produto;
const acimadeduas_vezes = valor_produto * (1 + 0.1);

if (acimadeduas_vezes){
    console.log(a_vista);
}


