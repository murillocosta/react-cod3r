import { connect } from 'react-redux';

import Card from '../Card/Card';

// eslint-disable-next-line import/no-anonymous-default-export
const Sorteio = props => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min + 1) + min);
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio);
