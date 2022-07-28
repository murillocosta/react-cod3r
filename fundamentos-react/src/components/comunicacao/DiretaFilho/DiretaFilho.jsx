/* eslint-disable import/no-anonymous-default-export */
export default props => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>
        <strong>{props.idade}</strong>{' '}
      </span>
      <span>{props.nerd ? 'É Nerd' : 'Não é Nerd'}!</span>
    </div>
  );
};
