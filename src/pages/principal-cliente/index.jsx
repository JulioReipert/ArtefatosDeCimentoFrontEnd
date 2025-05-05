import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import { BuscarClientes } from "../../services/buscar.jsx";
import { ListarClientes } from "../../components/listarClientes";
import BtnCriar from "../../components/btn_criar/index.jsx";
import { useEffect, useState } from "react";

export default function PrincipalCliente() {
  const [clientes, setClientes] = useState([]);

  async function atualizarClientes() {
    try {
      const dados = await BuscarClientes();
      setClientes(dados);
    } catch (err) {
      console.log("Erro ao carregar clientes.");
    }
  }

  useEffect(() => {
    atualizarClientes();
  }, []);

  return (
    <div className="pagina-principal">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-cliente-topo">
            <h1 className="titulo">Todos os Clientes</h1>
            <div className="ferramentas">
              <Ferramentas />
            </div>
          </div>

          <div className="lista-cliente">
            <ListarClientes clientes={clientes} />
            <BtnCriar atualizarClientes={atualizarClientes} />
          </div>
        </div>
      </main>
    </div>
  );
}
