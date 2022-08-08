import Layout from '../components/Layout';

export default function Home() {
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-bl from-gray-900 to-gray-600
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  );
}
