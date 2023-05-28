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

//tuplas
let boleto: [string, number, number] = ["agua conta", 199.90, 345415];

//datas
let aniversario: Date = new Date ("2023-05-28 05:00");
console.log(aniversario.toString());

//funcoes 
//função com number
function addNumber(x: number, y: number): number{
    return x + y;
}

let soma: number = addNumber(5,9);
console.log(soma);

//função com string
function addtohello(name :string) :string{
    return `hello ${name}`;
}
console.log(addtohello("Rodrigo"));

//função multi tipos
function calltophone (phone: number | string):number | string{
    return phone;
}
console.log(calltophone(992619015));

//função assicrona

async function getdatabase(id: number): Promise<string> {
return "Rodrigo";
}