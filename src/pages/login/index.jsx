import "./index.scss";
import axios from "axios";
import { ReactComponent as SetaRetorno } from "../../assets/images/seta_retorno.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function Entrar() {
    const resp = await axios.get("http://localhost:5010/login");

    const UsuarioValido = resp.data.find(
      (login) => login.email === email && login.senha === senha
    );

    if (UsuarioValido) {
      navigate("/principal-cliente");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      Entrar();
    }
  }

  return (
    <div className="page-login">
      <div className="logo">
        <h1 className="titulo">Busquets</h1>
        <h2 className="sub-titulo">Artefatos de Cimento</h2>
      </div>

      <section className="login-section">
        <Link to="/" className="seta-retorno">
          <SetaRetorno />
        </Link>

        <div className="informacoes">
          <h1 className="titulo-info">Login</h1>
          <h2 className="subtitulo-info">Insira suas informações</h2>
        </div>

        <div className="inputs">
          <div className="input-field">
            <h1 className="dado-txt">E-mail</h1>
            <input
              type="email"
              placeholder="Insira seu E-mail"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <div className="input-field">
            <h1 className="dado-txt">Senha</h1>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="input"
              onChange={(e) => setSenha(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <button className="btn-entrar" onClick={Entrar}>
            Entrar
          </button>

        </div>
      </section>
    </div>
  );
}
