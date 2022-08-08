import { useState } from 'react';
import Layout from '../../components/Layout/Layout';

export default function Estado() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }
  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={incrementar}>+1</button>
    </Layout>
  );
}
