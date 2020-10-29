class Card{
    constructor(name,cost){
        console.log("making a card")
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power,res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power} damage!!`);
        //reduce target res by power
    }
}

class Effect extends Card{
    constructor(name, cost, text, mag, stat){
        super(name, cost);
        this.text = text;
        this.mag = mag;
        this.stat = stat;
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.mag;
            console.log(`${this.name} was played on ${target.name}`);
            console.log(this.text);
            //card text here
            
    
        } else{
            throw new Error("Choose a valid target");
        }
    
    }
}




const Redninja = new Unit("Red Belt Ninja", "3", "3", "4");

const Blackninja = new Unit("Black Belt Ninja", "4", "5", "4");

const hardalgo = new Effect( "Hard Algorigthm", "2", "Increase target's resilience by 3", "resilience", "3");
hardalgo.play(Redninja);

const unprejection = new Effect("Unhanlded Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", 2);
const pairprog = new Effect("Pair Programming", "3", "increase targets's power by 2", "power", "3");

unprejection.play(Redninja);
pairprog.play(Redninja);
Redninja.attack(Blackninja);