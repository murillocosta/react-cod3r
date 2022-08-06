import Cabecalho from '../components/Cabecalho/Cabecalho';
import Layout from '../components/Layout/Layout';

export default function Example() {
  
  return (
    <Layout titulo="Usando Componentes">
      <Cabecalho titulo="Next.JS & React 👨🏾‍💻" />
      <Cabecalho titulo="Aprenda Next na prática" />
    </Layout>
  );
}
