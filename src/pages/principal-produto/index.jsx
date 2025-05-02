import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function PrincipalProduto() {
  return (
    <div className="pagina-principal">
      <Header />

      <main>
        <Sidebar />
        Produtos
      </main>
    </div>
  );
}
