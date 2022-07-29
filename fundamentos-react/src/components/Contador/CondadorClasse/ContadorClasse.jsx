import './Contador.css';
import { Component } from 'react';
import Display from './Display/Display';
import Botoes from './Botoes/Botoes';
import Passo from './Passo/Passo';

class ContadorClasse extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  };

  increment = () =>
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  decrement = () => {
    if (this.state.numero === 0) return;
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = novoPasso => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <Passo passo={this.state.passo} setPasso={this.setPasso}/>
        <Botoes setInc={this.increment} setDec={this.decrement} />
      </div>
    );
  }
}

export default ContadorClasse;
