/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import DiretaFilho from '../DiretaFilho/DiretaFilho';

export default props => {
  return (
    <div>
      <DiretaFilho nome="Daniela" idade={20} nerd={true} />
      <DiretaFilho nome="Camila" idade={17} nerd={false} />
    </div>
  );
};
