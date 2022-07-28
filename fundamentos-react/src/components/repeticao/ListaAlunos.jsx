/* eslint-disable import/no-anonymous-default-export */
import alunos from '../../data/alunos';

export default props => {
  // const li1 = (
  //   <li>
  //     {alunos[0].id} {alunos[0].nome} &#x2192; {alunos[0].nota}
  //   </li>
  // );

  const alunosLi = alunos.map(aluno => (
    <li key={aluno.id}>
      {aluno.id} {aluno.nome} &#x2192; {aluno.nota}
    </li>
  ));

  return (
    <div>
      <ul>{alunosLi}</ul>
    </div>
  );
};
