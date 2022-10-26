import React from 'react';
import Field from './inputField';
import TextArea from './textArea';

class Form extends React.Component {
    constructor() {
        super()
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: '',
          textarea: '',
          text: '',
          number: '',
          check: '',
        }
      }
    
      handleChange({ target }) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
          [name]: value,
        })
      }
    
      render() {
        return (
          <div>
            <form className='Forms'>
              <fieldset>
                <Field type='text' name='text' value={this.state.text} handleChange={this.handleChange}/>
                <Field type='number' name='number' value={this.state.number} handleChange={this.handleChange}/>
                <Field type='checkbox' name='check' value={this.state.check} handleChange={this.handleChange}/>
                <select className='Option' name='value' value={this.state.value} onChange={this.handleChange}>
                    <option value='Ótimo'>Ótimo</option>
                    <option value='Bom'>Bom</option>
                    <option value='Regular'>Regular</option>
                </select>
                <TextArea name='textarea' value={this.state.textarea} handleChange={this.handleChange}/>
              </fieldset>
                <Field type='file' />
            </form>
          </div>
        );
      }    
}

export default Form;