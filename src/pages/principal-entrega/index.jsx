import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function PrincipalEntrega() {
  return (
    <div className="pagina-principal">
      <Header />

      <main>
        <Sidebar />
        Entregas
      </main>
    </div>
  );
}
