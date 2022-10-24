import React from 'react';

function handleClickOne() {
  console.log('Clicou 1')
}

function handleClickTwo() {
  console.log('Clicou 2')
}

function handleClickThree() {
  console.log('Clicou 3')
}

class App extends React.Component {
  render() {
    return (
      <div className='button'>
        <button onClick={handleClickOne}>Botão 1</button>
        <button onClick={handleClickTwo}>Botão 2</button>
        <button onClick={handleClickThree}>Botão 3</button>
      </div>
    );
  }
}

export default App;