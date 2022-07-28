/* eslint-disable import/no-anonymous-default-export */
import If, { Else } from '../If';

export default props => {
  const usuario = props.usuario;

  return (
    <div>
      {/* <If test={usuario && usuario.nome?.trim()}>
        <div>
          Seja bem vindo(a), <strong>{usuario.nome}</strong>!
        </div>
      </If>
      <If test={!usuario || !usuario.nome?.trim()}>
        <div>
          Seja bem vindo(a), <strong>Estudante</strong>!
        </div>
      </If> */}
      <If test={usuario && usuario.nome?.trim()}>
        <p>
          Seja bem vindo, <strong>{usuario.nome}</strong>.
        </p>
        <Else>
          <p>
            Seja bem vindo, <strong>Amigão</strong>.
          </p>
        </Else>
      </If>
    </div>
  );
};
