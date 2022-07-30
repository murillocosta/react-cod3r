/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
  return (
    <div>
      <button onClick={props.setDec} className="BotaoContador">
        - 
      </button>
      <button onClick={props.setInc} className="BotaoContador">
        + 
      </button>
    </div>
  );
};
