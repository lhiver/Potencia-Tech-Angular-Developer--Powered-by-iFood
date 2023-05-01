

const valor_produto = 100;
const formade_pagamento = 4;
const a_vista = valor_produto * (1 - 0.1);
const Dinheiro_ou_pix = valor_produto * (1 - 0.15);
const duas_vezes = valor_produto;
const acimadeduas_vezes = valor_produto * (1 + 0.1);

if(formade_pagamento === 1){
    console.log(a_vista);
}
else if(formade_pagamento ===2){
    console.log(Dinheiro_ou_pix);
}
else if(formade_pagamento === 3){
    console.log(duas_vezes);
}
else if(formade_pagamento === 4){
    console.log(acimadeduas_vezes);
}

