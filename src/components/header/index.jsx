import "./index.scss";

import { ReactComponent as SetaRetorno } from "../../assets/images/seta_retorno_branca.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const mostrarLogin = location.pathname === "/";

  return (
    <header className="comp-header">
      <div className="title-group">
        <h1 className="tittle">BUSQUETS</h1>
        <p className="sub-tittle">Artefatos de Cimento</p>
      </div>

      <div className="login">
        {mostrarLogin ? (
          <div>
            <p>(11) 97241-6598</p>
            <p>busquetcon1@gmail.com</p>
            <p>Rua Pedrinho Roschel, 80 A - Vila Roschel, São Paulo, SP</p>
          </div>
        ) : (
          <Link to="/" className="seta-volta">
            <SetaRetorno />
          </Link>
        )}
      </div>
    </header>
  );
}
