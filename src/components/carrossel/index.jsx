import "./index.scss";

export default function Carrossel(props) {
  return (
    <div className="comp-carrossel">
      <div className="item-carrossel">
        <h1 className="titulo">{props.titulo}</h1>
        <img className="imagem" src={props.imagem} alt={props.titulo} />
      </div>
    </div>
  );
}
