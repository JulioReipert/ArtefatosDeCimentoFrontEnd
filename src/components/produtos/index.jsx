import "./index.scss";
import { ReactComponent as SetaItem } from "../../assets/images/seta_item.svg";

export default function Produto(props) {
  return (
    <div className="comp-produto">
      <div>
        <h1 className="titulo">{props.titulo}</h1>
        <h2 className="conteudo"> {props.conteudo}</h2>

        <div className="itens">
          <h1 className="conteudo-item">
            {" "}
            <SetaItem /> {props.item01}
          </h1>

          <h1 className="conteudo-item">
            {" "}
            <SetaItem /> {props.item02}
          </h1>

          <h1 className="conteudo-item">
            {" "}
            <SetaItem /> {props.item03}
          </h1>

          <h1 className="conteudo-item">
            {" "}
            <SetaItem /> {props.item04}
          </h1>

          <h1 className="conteudo-item">
            {" "}
            <SetaItem /> {props.item05}
          </h1>
        </div>
        <img className="imagem" src={props.imagem} alt={props.titulo} />
      </div>
    </div>
  );
}
