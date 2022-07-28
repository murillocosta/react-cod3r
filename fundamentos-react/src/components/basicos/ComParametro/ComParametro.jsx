export default function ComParametro(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h4>{props.subtitulo}</h4>
      <p>
        O aluno <strong>{props.aluno}</strong> tem nota{' '}
        <strong>{props.nota}</strong>. Está <strong>{status}</strong>!{' '}
      </p>
    </div>
  );
}
