import { useState, useEffect } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Cliente from '../core/Cliente';
import clienteRepositorio from '../core/ClienteRepositorio';
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
  const repo: clienteRepositorio = new ColecaoCliente();

  const { exibirFormulario, exibirTabela, tabelaVisivel } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
  };
}
