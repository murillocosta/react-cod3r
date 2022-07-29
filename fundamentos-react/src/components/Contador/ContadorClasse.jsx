import './Contador.css';
import { Component } from 'react';

class ContadorClasse extends Component {
  state = {
    numero: this.props.numeroInicial,
  };

  increment = () =>
    this.setState({
      numero: this.state.numero + 1,
    });
  decrement = () => {
    if (this.state.numero === 0) return;
    this.setState({
      numero: this.state.numero - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3>{this.state.numero}</h3>
        <button onClick={this.decrement} className="BotaoContador">
          -1
        </button>
        <button onClick={this.increment} className="BotaoContador">
          +1
        </button>
      </div>
    );
  }
}

export default ContadorClasse;
