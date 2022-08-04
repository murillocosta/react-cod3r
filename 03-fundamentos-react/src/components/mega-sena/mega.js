// function gerarNumeros(qtde) {
//   const mega = new Array(qtde).fill(0);
//   console.log(mega);
//   return mega.map(el => el + parseInt(Math.random() * (61 - 1) + 1));
// }

// console.log(gerarNumeros(7));

export function gerarNumeros(qtde) {
  const numeros = Array(qtde)
    .fill(0)
    .reduce(nums => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums);
      return [...nums, novoNumero];
    }, [])
    .sort((n1, n2) => n1 - n2);

  return numeros;
}

export function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio;
}


