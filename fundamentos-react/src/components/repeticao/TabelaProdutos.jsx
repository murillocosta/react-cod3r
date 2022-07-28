/* eslint-disable import/no-anonymous-default-export */
import './TabelaProdutos.css';

import produtos from '../../data/produtos';

export default props => {
  const listaProdutos = produtos.map((produto, index) => (
    <tr key={produto.id} className={index % 2 === 0 ? 'Par' : 'Impar'}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
    </tr>
  ));

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{listaProdutos}</tbody>
      </table>
    </div>
  );
};
