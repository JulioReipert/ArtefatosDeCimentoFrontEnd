import "./index.scss";
import { ReactComponent as UserIcon } from "../../assets/images/User.svg";
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div className="comp-bottom">
      <div className="bottom">
        <h1 className="telefone">(11) 97241-6598</h1>
        <h1 className="email">busquetcon1@gmail.com</h1>
      </div>
      <div className="login">
        <Link to="/login" className="login-link">
          <span>Admin</span>
          <div className="user-icon">
            <UserIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
