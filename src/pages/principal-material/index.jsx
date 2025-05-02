import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function PrincipalMaterial() {
  return (
    <div className="pagina-principal">
      <Header />

      <main>
        <Sidebar />
        Materiais
      </main>
    </div>
  );
}
