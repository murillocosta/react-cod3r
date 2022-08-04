import React from 'react';

import './App.css';
import './index.css';

import Primeiro from './components/basicos/Primeiro/Primeiro';
import ComParametro from './components/basicos/ComParametro/ComParametro';
import Fragmento from './components/basicos/Fragmento/Fragmento';
import Aleatorio from './components/basicos/Aleatorio/Aleatorio';
import Card from './components/layout/Card/Card';
import Familia from './components/basicos/Familia/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro/FamiliaMembro';

import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai/IndiretaPai';
import Input from './components/formulario/Input/Input';
import Contador from './components/Contador/Contador';
import ContadorClasse from './components/Contador/CondadorClasse/ContadorClasse';
import Megasena from './components/mega-sena/Megasena';

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => (
  <div className="App">
    <h1>Fundamentos de React</h1>

    <div className="Cards">
      <Card titulo="#13 - Desafio Mega-sena" color="#ba3bab">
        <Megasena qtde={8}/>
      </Card>

      <Card titulo="#12.1 - Contador - Componente de Classe" color="#333333">
        <ContadorClasse numeroInicial={23} />
      </Card>

      <Card titulo="#12 - Contador" color="#f33333">
        <Contador numeroInicial={54} passo={5} />
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#0b0d39">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <ParOuImpar numero={62} />

        <UsuarioInfo
          usuario={{
            nome: 'Fernando',
          }}
        />
        <UsuarioInfo
          usuario={{
            email: 'fer@nando.com',
          }}
        />
        <UsuarioInfo usuario={{ nome: 'Murillo' }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#FF432E">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 -  Repetição" color="#004C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 -  Componente com filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira" cidade="Salvador">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Maria" />
          <FamiliaMembro nome="João" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio max={60} min={1} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Componente com Parâemtro" color="#E8B71A">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Situação do Aluno:"
          aluno="Murillo"
          nota={9.2}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
