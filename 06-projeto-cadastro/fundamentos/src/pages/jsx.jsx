import Layout from '../components/Layout/Layout';

export default function Jsx() {
  const titulo = <h1>Jsx é um conceito central.</h1>;

  function subtitulo() {
    return <h2>{'muito legal'.toUpperCase()}</h2>;
  }

  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
        {subtitulo()}
        <p>
          {JSON.stringify({
            nome: 'Murillo',
            idade: 32,
          })}
        </p>
      </div>
    </Layout>
  );
}
