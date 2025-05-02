import "./index.scss";
import { ReactComponent as SetaItem } from "../../assets/images/seta_item.svg";

export default function Produto(props) {
  return (
    <div className="comp-produto">
      <div>
        <h1 className="titulo">{props.titulo}</h1>
        <h2 className="conteudo"> {props.conteudo}</h2>
        <img className="imagem" src={props.imagem} alt={props.titulo} />
        <div className="itens">
          <SetaItem />
          <h1 className="conteudo-item">{props.item01}</h1>
          <SetaItem />
          <h1 className="conteudo-item">{props.item02}</h1>
          <SetaItem />
          <h1 className="conteudo-item">{props.item03}</h1>
          <SetaItem />
          <h1 className="conteudo-item">{props.item04}</h1>
          <SetaItem />
          <h1 className="conteudo-item">{props.item05}</h1>
        </div>
      </div>
    </div>
  );
}
