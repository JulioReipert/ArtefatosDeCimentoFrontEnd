import "./index.scss";
import { ReactComponent as EditarIcon } from "../../assets/images/alterar_img.svg";
import { ReactComponent as DeletarIcon } from "../../assets/images/deletar_img.svg";
import { ReactComponent as FiltroIcon } from "../../assets/images/filtro_img.svg";

export default function Ferramentas({ Editar, Excluir }) {
  return (
    <div className="comp-ferramentas">
      <EditarIcon onClick={Editar} />
      <DeletarIcon onClick={Excluir} />
      {/* <FiltroIcon /> */}
    </div>
  );
}
