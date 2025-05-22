import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import BtnCriarCliente from "../../components/btn_criar/index.jsx";
import { useState, useEffect } from "react";
import { BuscarClientes } from "../../services/buscar.jsx";
import { ExcluirCliente } from "../../services/deletar.jsx";
import { EditarCliente } from "../../services/editar.jsx";
import Validador from "../../utils/validacao.js";

export default function PrincipalCliente() {
  const [cliente, setCliente] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  const [erros, setErros] = useState({});

  const tipoDocLabel = {
    1: "CPF",
    2: "CNPJ",
  };

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

    const novosErros = {};

    if (!Validador.validarTelefone(dadosEdicao.telefone)) {
      novosErros.telefone = true;
    }

    if (!Validador.validarCelular(dadosEdicao.celular)) {
      novosErros.celular = true;
    }

    // if (
    //   dadosEdicao.tipo_documento === "1" &&
    //   !Validador.validarDocumento(dadosEdicao.numero_documento, "1")
    // ) {
    //   novosErros.numero_documento = true;
    // }

    // if (
    //   dadosEdicao.tipo_documento === "2" &&
    //   !Validador.validarDocumento(dadosEdicao.numero_documento, "2")
    // )

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

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
    setErros({});
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
                      className="input-cli-edit-nome"
                      value={dadosEdicao.nome}
                      placeholder="nome"
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      className="input-cli-edit-email"
                      type="email"
                      value={dadosEdicao.email}
                      placeholder="email"
                      onChange={(e) => atualizarCampo("email", e.target.value)}
                    />
                    <input
                      className={
                        erros.telefone ? "erro-input" : "input-cli-edit-tel"
                      }
                      value={dadosEdicao.telefone}
                      placeholder="telefone"
                      onChange={(e) =>
                        atualizarCampo("telefone", e.target.value)
                      }
                    />
                    <input
                      className={
                        erros.celular ? "erro-input" : "input-cli-edit-cell"
                      }
                      value={dadosEdicao.celular}
                      placeholder="celular"
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
                      <option value="1">CPF</option>
                      <option value="2">CNPJ</option>
                    </select>

                    <input
                      className={
                        erros.numero_documento
                          ? "erro-input"
                          : "input-cli-edit-numDoc"
                      }
                      value={dadosEdicao.numero_documento}
                      placeholder="num. documento"
                      onChange={(e) => {
                        atualizarCampo("numero_documento", e.target.value);
                      }}
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
                        {tipoDocLabel[cliente.tipo_documento]}
                      </label>
                      <label className="cliente-infos-numero_documento">
                        {cliente.numero_documento}
                      </label>
                    </>
                  </div>
                )}
              </li>
            ))}
          </div>
        </div>
        <BtnCriarCliente fetchClientes={fetchClientes} />
      </main>
    </div>
  );
}
