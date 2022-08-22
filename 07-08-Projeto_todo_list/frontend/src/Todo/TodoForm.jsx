import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../templates/Grid/Grid';
import IconButton from '../templates/IconButton/IconButton';

import {
  changeDescription,
  search,
  add,
  clear,
} from './TodoActions/TodoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(event) {
    const { add, search, description, clear } = this.props;

    if (event.key === 'Enter') {
      event.shiftKey ? search() : add(description);
    } else if (event.key === 'Escape') {
      clear();
    }
  }

  render() {
    const { add, search, description } = this.props;

    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            placeholder="Adicione uma tarefa"
            id="description"
            className="form-control"
            value={this.props.description}
            onKeyUp={this.keyHandler}
            onChange={this.props.changeDescription}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconButton style="info" icon="search" onClick={search} />
          <IconButton style="default" icon="close" onClick={this.props.clear} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
