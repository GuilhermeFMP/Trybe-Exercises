import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [idade, setIdade] = useState(0)
  const [cidade, setCidade] = useState('')
  const [module, setModule] = useState();

  return (
    <div>
      <form>
        <label htmlFor='Name' >
          Nome Completo:
          <input
            type='text'
            id='Name'
            value={ name }
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor='Idade' >
          Idade:
          <input
            type='number'
            id='Idade'
            value={ idade }
            onChange={({ target }) => setIdade(target.value)}
          />
        </label>
        <label htmlFor='Cidade' >
          Cidade:
          <input
            type='text'
            id='Cidade'
            value={ cidade }
            onChange={({ target }) => setCidade(target.value)}
          />
        </label>
        <legend>Módulo</legend>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="frontend">
          Front-end
          <input
            type="radio"
            id="frontend"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="backend">
          Back-end
          <input
            type="radio"
            id="backend"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <br />
        <label htmlFor="cs">
          Ciência da computação
          <input
            type="radio"
            id="cs"
            name="module"
            value="Ciência da computação"
            checked={module === 'Ciência da computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
