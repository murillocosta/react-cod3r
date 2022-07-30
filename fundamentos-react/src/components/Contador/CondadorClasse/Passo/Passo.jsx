/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
  return (
    <div>
      <label htmlFor="passoInput">Passo:</label>
      <input
        type="number"
        value={props.passo}
        onChange={e => props.setPasso(+e.target.value)}
        id="passoInput"
      ></input>
    </div>
  );
};
