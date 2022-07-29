import { useState } from 'react';

import './Input.css';

/* eslint-disable import/no-anonymous-default-export */
export default props => {
  const [valor, setValor] = useState('');

  // function quandoMudar(e) {
  //   setValor(e.target.value);
  // }

  return (
    <div>
      <h2>{valor}</h2>
      <div className="InputContainer">
        <input
          placeholder="Digite alguma coisa"
          className="Input"
          value={valor}
          onChange={event => setValor(event.target.value)}
        />
        <input
          placeholder="Somente leitura (atributo readOnly)"
          className="Input"
          value={valor}
          readOnly //Precisa da propriedade readOnly quando o input não possui onChange
        />
        <input
          placeholder="Componente não controlado value={undefined}"
          className="Input"
          value={undefined} //Componente não controlado
        />
      </div>
    </div>
  );
};
