import "./index.scss";
import { ReactComponent as EditarIcon } from "../../assets/images/alterar_img.svg";
import { ReactComponent as DeletarIcon } from "../../assets/images/deletar_img.svg";
import { ReactComponent as FiltroIcon } from "../../assets/images/filtro_img.svg";

export default function Ferramentas({ aoClicarExcluir }) {
  return (
    <div className="comp-ferramentas">
      <EditarIcon />
      <DeletarIcon onClick={aoClicarExcluir} />
      <FiltroIcon />
    </div>
  );
}
