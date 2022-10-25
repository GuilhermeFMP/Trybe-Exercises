import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.state = {
      value: '',
      textarea: '',
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }


  handleChange2(event) {
    this.setState({textarea: event.target.value})
  }

  render() {
    return (
      <div>
        <form className='Forms'>
          <input type='text'></input>
          <input type='number'></input>
          <select className='Option' value={this.state.value} onChange={this.handleChange}>
            <option value='Ótimo'>Ótimo</option>
            <option value='Bom'>Bom</option>
            <option value='Regular'>Regular</option>
          </select>
          <textarea value={this.state.textarea} onChange={this.handleChange2}></textarea>

        </form>
      </div>
    );
  }
}

export default App;
