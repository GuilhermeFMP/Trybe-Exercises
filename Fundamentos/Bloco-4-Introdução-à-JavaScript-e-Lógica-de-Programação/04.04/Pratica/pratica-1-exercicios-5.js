let info = [{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  },
  {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }]

  let margarida = info[0];
  let tioPatinhas = info[1];

for (let index = 0; index < 1; index += 1){
    console.log(margarida['personagem'] + ' e ' + tioPatinhas['personagem']);
    console.log(margarida['origem'] + ' e ' + tioPatinhas['origem']);
    console.log(margarida['nota'] + ' e ' + tioPatinhas['nota']);
    if (margarida['recorrente'] == 'Sim' && tioPatinhas['recorrente'] ==  'Sim'){
        console.log('Ambos recorrentes');
    }
}