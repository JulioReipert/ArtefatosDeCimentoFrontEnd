import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function PrincipalCliente() {
  return (
    <div className="pagina-principal">
      <Header />

      <main>
        <Sidebar />

        <div className="lista-cliente">
          <h1>Todos os Clientes</h1>
        </div>
      </main>
    </div>
  );
}
