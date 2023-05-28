//generics
function concatArray<T> (...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numarray = concatArray<number[]> ([5,9], [7]);
const stgarray = concatArray<string[]> (["Rodrigo", "vegeta"], ["goku"]);

console.log(numarray);
console.log(stgarray);