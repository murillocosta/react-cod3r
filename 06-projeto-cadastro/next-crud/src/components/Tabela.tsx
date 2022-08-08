import Cliente from '../core/Cliente';
import { IconeEdicao, IconeLixo } from './Icones';

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-3">Código</th>
        <th className="text-left p-3">Nome</th>
        <th className="text-left p-3">Idade</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, index) => {
      return (
        <tr
          key={cliente.id}
          className={`${index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-300'}`}
        >
          <td className="text-left p-3">{cliente.id}</td>
          <td className="text-left p-3">{cliente.nome}</td>
          <td className="text-left p-3">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center items-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`flex justify-center items-center
        text-green-800 rounded-full p-2 m-1
        hover:text-green-700`}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`flex justify-center items-center
        text-red-800 rounded-full p-2 m-1
        hover:text-red-600`}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`bg-gradient-to-r from-gray-400 to-gray-500`}>
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
