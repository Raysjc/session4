class Character{
    constructor(name,energy,hitPoints,id){
        this.name = name;
        this.energy = energy;
        this.hitPoints = hitPoints;
        this.id = id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML = `Name: ${this.name} <br> Energy: ${this.energy} <br> Hit Points: ${this.hitPoints}`;
    }

    attack = function(opponent){
        let newEnergy = opponent.energy - this.hitPoints;
        opponent.energy = newEnergy;
        opponent.display();
            if (opponent.energy <= 0) {
            document.getElementById(opponent.id).innerHTML = 'You Lose'
            document.getElementById(this.id).innerHTML = 'You Win'
            }
    }
}
//object
const c1 = new Character("Mario", 100, 20, "c1"); 
const c2 = new Character("Yoshi", 100, 10, "c2");

c1.display();
c2.display(); 

restart = function() {
    let defaultEnergy=100;
    c1.energy=defaultEnergy;
    c2.energy=defaultEnergy;
    c1.display();
    c2.display();
}