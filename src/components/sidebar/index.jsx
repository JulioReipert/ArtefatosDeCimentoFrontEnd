import "./index.scss";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav>
      <nav className="menu">
        <Link
          to="/principal-cliente"
          className={
            isActive("/principal-cliente") ? "menu-item ativo" : "menu-item"
          }
        >
          Clientes
        </Link>
        <Link
          to="/principal-entrega"
          className={
            isActive("/principal-entrega") ? "menu-item ativo" : "menu-item"
          }
        >
          Entregas
        </Link>
        <Link
          to="/principal-produto"
          className={
            isActive("/principal-produto") ? "menu-item ativo" : "menu-item"
          }
        >
          Produtos
        </Link>
        <Link
          to="/principal-material"
          className={
            isActive("/principal-material") ? "menu-item ativo" : "menu-item"
          }
        >
          Materiais
        </Link>
        <Link
          to="/principal-pedido"
          className={
            isActive("/principal-pedido") ? "menu-item ativo" : "menu-item"
          }
        >
          Pedidos
        </Link>
      </nav>
    </nav>
  );
}
