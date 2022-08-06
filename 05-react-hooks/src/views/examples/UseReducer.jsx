/* eslint-disable default-case */
import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

import { initialState, allReducers } from '../../store';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = props => {
  const [state, dispatch] = useReducer(allReducers, initialState);
  const [inputNumberValue, setInputNumberValue] = useState(1);
  const [inputNameValue, setInputNameValue] = useState('');

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        {state.user ? (
          <span className="text">Olá, {state.user.name}. 😁</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          {/* <button
            className="btn"
            onClick={_ => dispatch({ type: 'login', payload: 'Maria' })}
          >
            Login
          </button> */}
          <button className="btn" onClick={_ => numberAdd2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={_ => dispatch({ type: 'numberTimes7' })}
          >
            * 7
          </button>
          <button
            className="btn"
            onClick={_ => dispatch({ type: 'numberPer25' })}
          >
            / 25
          </button>
          <button
            className="btn"
            onClick={_ => dispatch({ type: 'numberParseInt' })}
          >
            Inteiro
          </button>
        </div>
        <div>
          <input
            type="number"
            className="input"
            style={{ width: '300px', textAlign: 'end' }}
            value={inputNumberValue}
            onChange={event => setInputNumberValue(+event.target.value)}
          />
          <button
            className="btn"
            onClick={_ =>
              dispatch({ type: 'numberPlusInput', payload: inputNumberValue })
            }
          >
            Somar Com Input
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Nome do Usuário"
            className="input"
            style={{ width: '500px', textAlign: 'start', fontSize: '3.5rem' }}
            value={inputNameValue}
            onChange={event => setInputNameValue(event.target.value)}
          />
          <button
            className="btn"
            onClick={_ => login(dispatch, inputNameValue)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
