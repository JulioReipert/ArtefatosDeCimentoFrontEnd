import "./index.scss";
import { ReactComponent as UserIcon } from "../../assets/images/User.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="comp-header">
      <div className="title-group">
        <h1 className="tittle">BUSQUETS</h1>
        <h2 className="sub-tittle">Artefatos de Cimento</h2>
      </div>

      <div className="login">
        <Link to="/login" className="login-link">
          <span>Login</span>
          <div className="user-icon">
            <UserIcon />
          </div>
        </Link>
      </div>
    </header>
  );
}
