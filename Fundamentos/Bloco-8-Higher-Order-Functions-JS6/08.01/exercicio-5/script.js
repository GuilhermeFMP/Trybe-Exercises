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
    const maxDamage = battleMembers.warrior.strength * 2;
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

console.log(mageDamage())