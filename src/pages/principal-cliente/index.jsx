import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import BtnCriarCliente from "../../components/btn_criar/index.jsx";
import { useState, useEffect } from "react";
import { BuscarClientes } from "../../services/buscar.jsx";
import { ExcluirCliente } from "../../services/deletar.jsx";
import { EditarCliente } from "../../services/editar.jsx";

export default function PrincipalCliente() {
  const [cliente, setCliente] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  async function fetchClientes() {
    const dados = await BuscarClientes();
    setCliente(dados);
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  async function deletarCliente() {
    if (selecionadoId == null) return;
    await ExcluirCliente(selecionadoId);
    setSelecionadoId(null);
    fetchClientes();
  }

  async function salvarEdicao() {
    if (!dadosEdicao) return;
    await EditarCliente(
      selecionadoId,
      dadosEdicao.nome,
      dadosEdicao.email,
      dadosEdicao.telefone,
      dadosEdicao.celular,
      dadosEdicao.tipo_documento,
      dadosEdicao.numero_documento
    );
    setSelecionadoId(null);
    setDadosEdicao(null);
    fetchClientes();
  }

  function iniciarEdicao(cliente) {
    setSelecionadoId(cliente.id);
    setDadosEdicao({ ...cliente });
  }

  function atualizarCampo(nome, valor) {
    setDadosEdicao((prev) => ({ ...prev, [nome]: valor }));
  }

  return (
    <div className="pagina-principal">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-cliente-topo">
            <h1 className="titulo">Todos os Clientes</h1>
            <div className="ferramentas">
              <Ferramentas Editar={salvarEdicao} Excluir={deletarCliente} />
            </div>
          </div>

          <div className="lista-cliente">
            <div className="info-item-lista">
              <label>ID</label>
              <label>nome</label>
              <label>email</label>
              <label>telefone</label>
              <label>celular</label>
              <label>tipo doc.</label>
              <label>num. doc.</label>
            </div>
            {cliente.map((cliente) => (
              <li key={cliente.id} className="item-lista">
                <input
                  type="checkbox"
                  className="checkbox-cliente"
                  checked={selecionadoId === cliente.id}
                  onChange={() =>
                    selecionadoId === cliente.id
                      ? setSelecionadoId(null)
                      : iniciarEdicao(cliente)
                  }
                />

                {selecionadoId === cliente.id ? (
                  <>
                    <input
                      value={dadosEdicao.nome}
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      value={dadosEdicao.email}
                      onChange={(e) => atualizarCampo("email", e.target.value)}
                    />
                    <input
                      value={dadosEdicao.telefone}
                      onChange={(e) =>
                        atualizarCampo("telefone", e.target.value)
                      }
                    />
                    <input
                      value={dadosEdicao.celular}
                      onChange={(e) =>
                        atualizarCampo("celular", e.target.value)
                      }
                    />
                    <select
                      value={dadosEdicao.tipo_documento}
                      onChange={(e) =>
                        atualizarCampo("tipo_documento", e.target.value)
                      }
                    >
                      <option value="CPF">CPF</option>
                      <option value="CNPJ">CNPJ</option>
                    </select>
                    <input
                      value={dadosEdicao.numero_documento}
                      onChange={(e) =>
                        atualizarCampo("numero_documento", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <div className="cliente-infos">
                    <>
                      <label className="cliente-infos-id">{cliente.id}</label>
                      <label className="cliente-infos-nome">
                        {cliente.nome}
                      </label>
                      <label className="cliente-infos-email">
                        {cliente.email}
                      </label>
                      <label className="cliente-infos-telefone">
                        {cliente.telefone}
                      </label>
                      <label className="cliente-infos-celular">
                        {cliente.celular}
                      </label>
                      <label className="cliente-infos-tipo_documento">
                        {cliente.tipo_documento}
                      </label>
                      <label className="cliente-infos-numero_documento">
                        {cliente.numero_documento}
                      </label>
                    </>
                  </div>
                )}
              </li>
            ))}

            <BtnCriarCliente fetchClientes={fetchClientes} />
          </div>
        </div>
      </main>
    </div>
  );
}
