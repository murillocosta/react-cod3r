/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ max, min }) => {
  const randomNumber = parseInt(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <h2>Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {max}
      </p>

      <p>
        <strong>O número sorteado foi:</strong> {randomNumber}
      </p>
    </div>
  );
};
