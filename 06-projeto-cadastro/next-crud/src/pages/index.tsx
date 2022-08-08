import Botao from '../components/Botao';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

export default function Home() {
  const clientes = [
    new Cliente('Daniel', 23, '10'),
    new Cliente('Ana', 32, '11'),
    new Cliente('Maria', 57, '12'),
    new Cliente('Mariano', 61, '13'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluído: ${cliente.nome}`);
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-bl from-gray-900 to-gray-600
      text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>

        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  );
}
