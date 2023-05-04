const pagamento = 3;
const preco = 100;

function com_desconto (valor,desconto){
    return (valor - (valor * (desconto /100)));
}

function com_juros (valor,juros){
    return (valor + (valor * (juros /100)));
}

if(pagamento === 1){
    console.log(com_desconto(preco,10));
}
else if(pagamento ===2){
    console.log(com_desconto(preco,15));
}
else if(pagamento === 3){
        console.log(preco);
}
else if(pagamento === 4){
    console.log(com_juros(preco,10));
}



