import "./index.scss";
import { ReactComponent as UserIcon } from "../../assets/images/User.svg";
import { ReactComponent as SetaRetorno } from "../../assets/images/seta_retorno_branca.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const mostrarLogin = location.pathname === "/";

  return (
    <header className="comp-header">
      <div className="title-group">
        <h1 className="tittle">BUSQUETS</h1>
        <h2 className="sub-tittle">Artefatos de Cimento</h2>
      </div>

      <div className="login">
        {mostrarLogin ? (
          <Link to="/login" className="login-link">
            <span>Login</span>
            <div className="user-icon">
              <UserIcon />
            </div>
          </Link>
        ) : (
          <Link to="/" className="seta-volta">
            <SetaRetorno />
          </Link>
        )}
      </div>
    </header>
  );
}
