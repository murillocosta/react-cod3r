import React from 'react';

export default function Fragmento(props) {
  return (
    // <React.Fragment key="1">
    //   <h2>Fragmento</h2>
    //   <p>Cuidado com esse erro!</p>
    // </React.Fragment>

    // não aceita o uso do key
    // não precisa do key para o react saber que o elemento é diferente
    <>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </>
  );
}
