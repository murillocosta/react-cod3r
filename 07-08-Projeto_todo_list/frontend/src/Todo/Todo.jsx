import React from 'react';

import PageHeader from '../templates/PageHeader/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default props => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
);
