//decorators
function exibirNome(target: any){
    console.log(target);
}
@exibirNome
class funcionario {}

//class decorators
/*
function apiversion(version: string){
    return (target: any)=> {
        Object.assign(target.prototype, {__version : version});
    };
}
@apiversion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);
*/