interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray' | 'red';
  className?: string;
  children: any;
  onClick?: ((cliente) => void);
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'green';
  return (
    <button
      onClick={props.onClick}
      className={`
  bg-gradient-to-r from-${cor}-400 to-${cor}-600  text-white px-4 py-2 rounded-md
  shadow-md shadow-${cor}-500/50
  
  ${props.className}
  `}
    >
      {props.children}
    </button>
  );
}
