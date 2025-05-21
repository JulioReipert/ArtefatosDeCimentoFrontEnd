import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import { useState, useEffect } from "react";
import { BuscarMateria, BuscarProduto } from "../../services/buscar";
import { ExcluirProduto } from "../../services/deletar";
import { EditarProduto } from "../../services/editar";
import BtnCriarProduto from "../../components/btn_criar_produto";

export default function PrincipalProduto() {
  const [produto, setProduto] = useState([]);
  const [materia, setMateria] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  async function fetchProdutos() {
    const dados = await BuscarProduto();
    setProduto(dados);
  }

  async function fetchMateriais() {
    const dados = await BuscarMateria();
    setMateria(dados);
  }

  useEffect(() => {
    fetchProdutos();
    fetchMateriais();
  }, []);

  async function deletarProduto() {
    if (selecionadoId == null) return;
    await ExcluirProduto(selecionadoId);
    setSelecionadoId(null);
    fetchProdutos();
  }

  async function salvarEdicao() {
    if (!dadosEdicao) return;
    await EditarProduto(
      selecionadoId,
      dadosEdicao.nome,
      dadosEdicao.quantidade,
      dadosEdicao.comprimento,
      dadosEdicao.altura,
      dadosEdicao.largura,
      dadosEdicao.cor,
      dadosEdicao.peso,
      dadosEdicao.valor,
      dadosEdicao.materia_prima
    );
    setSelecionadoId(null);
    setDadosEdicao(null);
    fetchProdutos();
  }

  function iniciarEdicao(produto) {
    setSelecionadoId(produto.id);
    setDadosEdicao({ ...produto });
  }

  function atualizarCampo(nome, valor) {
    setDadosEdicao((prev) => ({ ...prev, [nome]: valor }));
  }

  return (
    <div className="pagina-principal-produto">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-produto-topo">
            <h1 className="titulo">Todos os Produtos</h1>
            <div className="ferramentas">
              <Ferramentas Editar={salvarEdicao} Excluir={deletarProduto} />
            </div>
          </div>

          <div className="lista-produto">
            <div className="info-item-lista-produto">
              <label>ID</label>
              <label>nome</label>
              <label>qtd</label>
              <label>comp.</label>
              <label>alt.</label>
              <label>larg.</label>
              <label>cor</label>
              <label>peso</label>
              <label>valor</label>
              <label>material</label>
            </div>
            {produto.map((produto) => (
              <li key={produto.id} className="item-lista-produto">
                <input
                  type="checkbox"
                  className="checkbox-produto"
                  checked={selecionadoId === produto.id}
                  onChange={() =>
                    selecionadoId === produto.id
                      ? setSelecionadoId(null)
                      : iniciarEdicao(produto)
                  }
                />

                {selecionadoId === produto.id ? (
                  <>
                    <input
                      className="input-ped-edit-nome"
                      value={dadosEdicao.nome}
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      className="input-ped-edit-qtd"
                      type="number"
                      value={dadosEdicao.quantidade}
                      onChange={(e) =>
                        atualizarCampo("quantidade", e.target.value)
                      }
                    />
                    <input
                      className="input-ped-edit-comp"
                      type="number"
                      value={dadosEdicao.comprimento}
                      onChange={(e) =>
                        atualizarCampo("comprimento", e.target.value)
                      }
                    />
                    <input
                      className="input-ped-edit-alt"
                      type="number"
                      value={dadosEdicao.altura}
                      onChange={(e) => atualizarCampo("altura", e.target.value)}
                    />
                    <input
                      className="input-ped-edit-larg"
                      type="number"
                      value={dadosEdicao.largura}
                      onChange={(e) =>
                        atualizarCampo("largura", e.target.value)
                      }
                    />
                    <input
                      className="input-ped-edit-cor"
                      value={dadosEdicao.cor}
                      onChange={(e) => atualizarCampo("cor", e.target.value)}
                    />
                    <input
                      className="input-ped-edit-peso"
                      type="number"
                      value={dadosEdicao.peso}
                      onChange={(e) => atualizarCampo("peso", e.target.value)}
                    />
                    <input
                      className="input-ped-edit-valor"
                      type="number"
                      value={dadosEdicao.valor}
                      onChange={(e) => atualizarCampo("valor", e.target.value)}
                    />
                    <select
                      className="input-ped-edit-material"
                      value={dadosEdicao.materia_prima ?? "null"}
                      onChange={(e) => {
                        const val = e.target.value;
                        atualizarCampo(
                          "materia_prima",
                          val === "null" ? null : val
                        );
                      }}
                    >
                      <option value="null">Nenhum</option>
                      {materia.map((materia) => (
                        <option key={materia.id} value={materia.id}>
                          {materia.nome}
                        </option>
                      ))}
                    </select>
                  </>
                ) : (
                  <div className="produtos-infos">
                    <>
                      <label className="produto-infos-id">{produto.id}</label>
                      <label className="produto-infos-nome">
                        {produto.nome}
                      </label>
                      <label className="produto-infos-qtd">
                        {" "}
                        {produto.quantidade}
                      </label>
                      <label className="produto-infos-comp">
                        {produto.comprimento}
                      </label>
                      <label className="produto-infos-alt">
                        {" "}
                        {produto.altura}
                      </label>
                      <label className="produto-infos-larg">
                        {" "}
                        {produto.largura}
                      </label>
                      <label className="produto-infos-cor">{produto.cor}</label>
                      <label className="produto-infos-peso">
                        {" "}
                        {produto.peso}
                      </label>
                      <label className="produto-infos-valor">
                        {produto.valor}
                      </label>
                      <label className="produto-infos-material">
                        {(
                          materia.find((m) => m.id === produto.materia_prima) ||
                          {}
                        ).nome || "---"}
                      </label>
                    </>
                  </div>
                )}
              </li>
            ))}

            <BtnCriarProduto fetchProdutos={fetchProdutos} />
          </div>
        </div>
      </main>
    </div>
  );
}
