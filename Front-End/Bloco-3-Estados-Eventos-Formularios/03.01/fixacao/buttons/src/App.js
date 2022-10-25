import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      numeroCliques1: 0,
      numeroCliques2: 0,
      numeroCliques3: 0,
    }
  }

  handleClickOne() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques1: estadoAnterior.numeroCliques1 + 1,
    }), () => console.log(this.getColorNumber(this.state.numeroCliques1)));
  }
  
  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques2: estadoAnterior.numeroCliques2 + 1,
    }), () => console.log(this.getColorNumber(this.state.numeroCliques2)));
  }
  
  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques3: estadoAnterior.numeroCliques3 + 1,
    }), () => console.log(this.getColorNumber(this.state.numeroCliques3)));
  }

  getColorNumber(num) {
    if(num % 2 === 0) {
      return 'green';
    }
    return 'white';
  }
  
  render() {
    const { numeroCliques1, numeroCliques2, numeroCliques3} = this.state
    return (
      <div className='button'>
        <button style={ {backgroundColor: this.getColorNumber(numeroCliques1)} } onClick={this.handleClickOne}>{this.state.numeroCliques1}</button>
        <button style={ {backgroundColor: this.getColorNumber(numeroCliques2)} } onClick={this.handleClickTwo}>{this.state.numeroCliques2}</button>
        <button style={ {backgroundColor: this.getColorNumber(numeroCliques3)} } onClick={this.handleClickThree}>{this.state.numeroCliques3}</button>
      </div>
    );
  }
}

export default App;