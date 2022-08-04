import React, { useMemo, useState } from 'react';
//import { useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function sum(a, b) {
  const future = Date.now() + 2000;
  while (Date.now() < future) {}
  return a + b;
}

const UseMemo = props => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const result = useMemo(_ => sum(n1, n2), [n1, n2]);

  //usando useEffect
  //   const [result, setResult] = useState(0);

  //   useEffect(
  //     function () {
  //       setResult(sum(n1, n2));
  //     },
  //     [n1, n2],
  //   );

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <SectionTitle title="Exercício #01" />

      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={event => setN1(+event.target.value)}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={event => setN2(+event.target.value)}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={event => setN3(+event.target.value)}
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
