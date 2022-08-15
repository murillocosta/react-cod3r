import './Intervalo.css';
import { connect } from 'react-redux';

import Card from '../Card/Card';

import {
  alterarNumeroMaximo,
  alterarNumeroMinimo,
} from '../../store/actions/numerosAction';

// eslint-disable-next-line import/no-anonymous-default-export
const Intervalo = props => {
  const { max, min } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={event => props.alterarMinimo(+event.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={event => props.alterarMaximo(+event.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
