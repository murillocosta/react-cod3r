import React from 'react';

export default props => {
  function gerarNumeros(qtde) {
    const mega = new Array(qtde);
    return mega.map(_ => Math.random(61 - 1) + 1);
  }

  return (
    <div>
      <h3>Desafio Mega Sena</h3>
      <h5>Resultado:</h5>
    </div>
  );
};
