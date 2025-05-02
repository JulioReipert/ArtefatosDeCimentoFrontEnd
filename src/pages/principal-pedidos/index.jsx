import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function PrincipalPedido() {
  return (
    <div className="pagina-principal">
      <Header />

      <main>
        <Sidebar />
        Pedidos
      </main>
    </div>
  );
}
