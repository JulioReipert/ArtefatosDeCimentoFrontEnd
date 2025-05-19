import "./index.scss";

export default function Carrossel(props) {
  return (
    <div className="comp-carrossel">
     
      <a className="item-carrossel" href={props.link}>
 
        <h1 className="titulo">{props.titulo}</h1>
        <img className="imagem" src={props.imagem} alt={props.titulo} />
        
      </a>
    
    </div>
  );
}
