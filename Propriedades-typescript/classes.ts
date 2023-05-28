//classes
class character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    atack():void {
        console.log(`attack with ${this.strength} points`);
    }
}

//sub-classe
class Magician extends character{
    magicpoins: number;
    constructor(name : string, strength: number, skill: number , magicpoins: number){
        super(name,strength,skill);
        this.magicpoins = magicpoins;
    }
}

const p1 = new character("ichigo",52,16);
console.log(p1);
p1.atack();

const p2 = new Magician("yanamoto", 28,102,279);
console.log(p2);