import "./index.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Ferramentas from "../../components/ferramentas";
import BtnCriarMateria from "../../components/btn_criar_material/index.jsx";
import { useState, useEffect } from "react";
import { BuscarMateria } from "../../services/buscar.jsx";
import { ExcluirMateria } from "../../services/deletar.jsx";
import { EditarMateria } from "../../services/editar.jsx";

export default function PrincipalMaterial() {
  const [materia, setMateria] = useState([]);
  const [selecionadoId, setSelecionadoId] = useState(null);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  async function fetchMaterias() {
    const dados = await BuscarMateria();
    setMateria(dados);
  }

  useEffect(() => {
    fetchMaterias();
  }, []);

  async function deletarMateria() {
    if (selecionadoId == null) return;

    try {
      await ExcluirMateria(selecionadoId);
      setSelecionadoId(null);
      fetchMaterias();
    } catch (error) {
      alert("Erro ao excluir, material está vinculado a um produto");
    }
  }

  async function salvarEdicao() {
    if (!dadosEdicao) return;
    await EditarMateria(
      selecionadoId,
      dadosEdicao.nome,
      dadosEdicao.quantidade
    );
    setSelecionadoId(null);
    setDadosEdicao(null);
    fetchMaterias();
  }

  function iniciarEdicao(materia) {
    setSelecionadoId(materia.id);
    setDadosEdicao({ ...materia });
  }

  function atualizarCampo(nome, valor) {
    setDadosEdicao((prev) => ({ ...prev, [nome]: valor }));
  }

  return (
    <div className="pagina-principal-material">
      <Header />
      <main>
        <Sidebar />
        <div className="main-02">
          <div className="lista-material-topo">
            <h1 className="titulo">Matérias Primas</h1>
            <div className="ferramentas">
              <Ferramentas Editar={salvarEdicao} Excluir={deletarMateria} />
            </div>
          </div>

          <div className="lista-material">
            <div className="info-item-lista-material">
              <label>ID</label>
              <label>nome</label>
              <label>quantidade</label>
            </div>
            {materia.map((materia) => (
              <li key={materia.id} className="item-lista-material">
                <input
                  type="checkbox"
                  className="checkbox-material"
                  checked={selecionadoId === materia.id}
                  onChange={() =>
                    selecionadoId === materia.id
                      ? setSelecionadoId(null)
                      : iniciarEdicao(materia)
                  }
                />

                {selecionadoId === materia.id ? (
                  <>
                    <input
                      className="input-material-edit1"
                      value={dadosEdicao.nome}
                      placeholder="nome"
                      onChange={(e) => atualizarCampo("nome", e.target.value)}
                    />
                    <input
                      className="input-material-edit"
                      type="number"
                      value={dadosEdicao.quantidade}
                      placeholder="quantidade"
                      onChange={(e) =>
                        atualizarCampo("quantidade", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <div className="material-infos">
                    <>
                      <label className="label-mat-id">{materia.id}</label>
                      <label className="label-mat-nome">{materia.nome}</label>
                      <label className="label-mat-qtd">
                        {materia.quantidade}
                      </label>
                    </>
                  </div>
                )}
              </li>
            ))}

            <BtnCriarMateria fetchMateriais={fetchMaterias} />
          </div>
        </div>
      </main>
    </div>
  );
}
