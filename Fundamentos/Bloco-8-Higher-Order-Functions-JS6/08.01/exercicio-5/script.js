const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    const minDamage = 15;
    const maxDamage = battleMembers.dragon.strength;
    let Damage = Number(Math.floor(Math.random() * (maxDamage - minDamage) + minDamage));
    return Damage;
};

const warriorDamage = () => {
    const minDamage = battleMembers.warrior.strength;
    const maxDamage = battleMembers.warrior.strength * battleMembers.warrior.weaponDmg;
    let Damage = Number(Math.floor(Math.random() * (maxDamage - minDamage) + minDamage));
    return Damage;
};

const mageDamage = () => {
    const minDamage = battleMembers.mage.intelligence;
    const maxDamage = battleMembers.mage.intelligence * 2;
    let Object = {};
    let Damage = Number(Math.floor(Math.random() * (maxDamage - minDamage) + minDamage));
    if (battleMembers.mage.mana < 15) {
        return 'Não possui mana suficiente';
    } else {
        Object['dano'] = Damage;
        Object['mana'] = 15;
    }
    return Object;
};

const gameActions = {
    warriorTurn: (warriorDamage) => {
        const warriorPoints = warriorDamage();
        battleMembers.warrior.damage = warriorPoints;
        battleMembers.dragon.healthPoints -= warriorPoints;
    },
    mageTurn: (mageDamage) => {
        const magePoints = mageDamage();
        battleMembers.dragon.healthPoints -= magePoints.dano;
        battleMembers.mage.damage = magePoints.dano;
        battleMembers.mage.mana -= magePoints.mana;
    },
    dragonTurn: (dragonDamage) => {
        const dragonPoints = dragonDamage();
        battleMembers.dragon.damage = dragonPoints;
        battleMembers.mage.healthPoints -= dragonPoints;
        battleMembers.warrior.healthPoints -= dragonPoints;
    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());