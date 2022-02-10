class Spaceship{
    constructor(hull,firePower, accuracy) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
        this.alive = true
    }
}

class Schwarz extends Spaceship {
    constructor(hull,firePower,accuracy) {
        super(hull,firePower,accuracy)
    }

    attack(enemyShip){
        if (this.accuracy > Math.random()){
            enemyShip.hull -= this.firePower
            if (enemyShip.hull <= 0){
                enemyShip.alive = false
                console.log("Alien has died")
            }
        }
        else {
            console.log("I missed")
        }

        console.log("Alien has " + enemyShip.hull + " hull left")
    }
}

class Enemy extends Spaceship{
    constructor(hull,firePower,accuracy){
        super(hull,firePower,accuracy)
        this.hull = Math.floor(Math.random() * 4) + 3
        this.firePower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }

    attack(enemyShip1){
        if (this.accuracy > Math.random()){
            enemyShip1.hull -= this.firePower
            if (enemyShip1.hull <= 0){
                enemyShip1.alive = false
                console.log("Alien has died")
            }
            //console.log("Enemy hit your ship")
        }else {
            console.log("Enemy missed you")
        }
        console.log("You have " + enemyShip1.hull + " hull left") 
    }

}

function Spacebattle(p, alienArr) {
    for (let i = 0; i < alienArr.length; i++){


        // while (p.alive && alienArr[i].alive){
        //     p.attack(alienArr[i])
        //     if (alienArr[i].alive == true){
        //         alienArr[i].attack(p);
        //         }
        //     }
        
        if (p.alive)
        {
            console.log("\nspacebattle " + (i +1))
            while (alienArr[i].alive)
            {
                p.attack(alienArr[i])
                if (alienArr[i].alive)
                {
                    alienArr[i].attack(p)
                }
            }
        }
    }
}


let hero = new Schwarz(20,5,.7)
// let badGuy = new Enemy()

let alienFleet = []
function makeFleet(num)
{
    for (let i = 0 ; i < num; i++){
        alienFleet[i] = new Enemy()
    }
}

makeFleet(6)

// console.log( "alienFleet = " + alienFleet)
// console.log(badGuy)
// console.log(hero)
// hero.attack(badGuy)
// badGuy.attack(hero)
// console.log(badGuy)
// console.log(hero)

console.log(alienFleet)
Spacebattle(hero, alienFleet)
