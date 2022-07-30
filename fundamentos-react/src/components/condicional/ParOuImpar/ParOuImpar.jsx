/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
  const isEven = props.numero % 2 === 0;

  return (
    <div>
      {props.numero} é {isEven ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  );
};
