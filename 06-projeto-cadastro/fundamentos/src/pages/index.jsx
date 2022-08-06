import styles from '../styles/Inicio.module.css';

import Link from 'next/link';
import Navegador from '../components/Navegador/Navegador';

export default function Inicio() {
  return (
    <div className={styles.inicio}>
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/example" texto="Exemplo" cor="#9400d3" />
      <Navegador destino="/jsx" texto="JSX" cor="crimson" />
      <Navegador destino="/navegacao" texto="Navegação #01" cor="darkgreen" />
    </div>
  );
}
