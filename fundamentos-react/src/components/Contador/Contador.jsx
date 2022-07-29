import './Contador.css';

import { useState } from 'react';

/* eslint-disable import/no-anonymous-default-export */
export default props => {
  const [valor, setValor] = useState(props.numeroInicial);

  const passo = props.passo || 1;

  const increment = () => {
    setValor(valor + passo);
  };
  const decrement = () => {
    if (valor <= 0) return setValor(0);
    setValor(valor - passo);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Passo: {props.passo}</p>
      <h3>{valor}</h3>
      <button className="BotaoContador" onClick={decrement}>
        -1
      </button>
      <button className="BotaoContador" onClick={increment}>
        +1
      </button>
    </div>
  );
};
