//interfaces (type x interface)
type robot = {
    id: number | string;
    name: string;
};

interface robot2{
    id: number | string;
    name:string;
}

const bot1:robot = {
    id:41,
    name: "megaman",
}

const bot2:robot2 = {
    id:97,
    name: "robocop",
}

console.log(bot1);
console.log(bot2);