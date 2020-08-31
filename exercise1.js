class Enemy {
    constructor(name, speed, healthPoint, attackPoint, isDead) {
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
        attacked() {
            this.healthPoint -= 30;
            return this.healthPoint;
        }
        confused() {
            this.speed -= 30;
            return this.speed;
        }
};

class Pocong extends Enemy {
    jump() {
        this.attackPoint += 35;
        return this.attackPoint;
    }
    superJump() {
        this.attackPoint += 75;
        return this.attackPoint;
    }
};

class Zombie extends Enemy {
    walking() {
        this.speed += 10;
        return this.speed;
    }
    running() {
        this.speed += 25;
        return this.speed;
    }
};

let pocong1 = new Pocong("mumun", 100, 100, 25, false);
console.log(pocong1)
console.log(pocong1.jump())

