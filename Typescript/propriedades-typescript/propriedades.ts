//tipos primitivos string, number e boolean
let nome: string = "Rodrigo Souza";
let idade: number = 28;
let altura: number = 1.70;
let ligado: boolean = true;

//null 
//undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes any, void
let retorno:void;
let retornoView:any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "Rodrigo",
    cidade: "Vitória",
    idade: 27,
};

// objeto tipado - com previsibilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: produtoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
};

// arrays
// array tipo 01
let dados: string [] = ["Rodrigo", "luana","thamires"];
//array tipo 02
let dados2: Array<string> = ["Rodrigo","luana", "thamires"];

//array hibrida
let infos: (string | number)[] = ["Rodrigo", 27,"luana","thamires"];