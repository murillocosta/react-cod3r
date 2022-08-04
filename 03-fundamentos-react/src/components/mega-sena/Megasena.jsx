import React from 'react';
import './Megasena.css';
import { useState } from 'react';
import { gerarNumeros } from './mega';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Desafio Mega Sena</h2>
      <h3>Resultado:</h3>
      <h4>{numeros.join(' ')}</h4>
      <div>
        <label>Quantidade de Números:</label>
        <input
          min="6"
          max="15"
          type="number"
          value={qtde}
          onChange={e => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
        Gerar números
      </button>
    </div>
  );
};
