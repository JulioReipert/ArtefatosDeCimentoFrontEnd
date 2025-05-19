import "./index.scss";
import Header from "../../components/header";
import SobreNos from "../../components/sobreNos";
import Carrossel from "../../components/carrossel";
import Produto from "../../components/produtos";

import { ReactComponent as Banner } from "../../assets/images/Banner-Artefatos-de-Cimento.svg";
import imgCobogo from "../../assets/images/cobogo_4pontas.png";
import imgCaixa from "../../assets/images/caixa_esgoto.png";
import imgPia from "../../assets/images/pia_cimento.png";
import imgTampa from "../../assets/images/tampa_esgoto.png";
import imgPote from "../../assets/images/pote_racao.png";
import imgMapa from "../../assets/images/localizacao.png";
import Bottom from "../../components/bottom";

export default function App() {
  return (
    <div className="page-app">
      <Header />

      <div className="barra-busca">
        <a href="#inicio" className="busca-inicio">
          Início
        </a>
        <a href="#produtos" className="busca-produtos">
          Produtos
        </a>
        <a href="#localizacao" className="busca-localização">
          Localização
        </a>
        <a href="#sobrenos" className="busca-sobrenos">
          Sobre Nós
        </a>
      </div>

      <div id="inicio" className="banner-container">
        <Banner className="banner" />
      </div>

      <div id="produtos" className="carrossel">
        <label>Produtos</label>
        <div className="carrossel-itens">
          <Carrossel titulo="Cobogó" imagem={imgCobogo} link="#cobogo" />
          <Carrossel titulo="Tampa de Fossa" imagem={imgTampa} link="#tampa" />
          <Carrossel titulo="Pia de Cimento" imagem={imgPia} link="#pia" />
          <Carrossel titulo="Caixa de Esgoto" imagem={imgCaixa} link="#caixa" />
          <Carrossel titulo="Pote de Ração" imagem={imgPote} link="#pote" />
        </div>
      </div>

      <Produto
        id="cobogo"
        titulo="Cobogó"
        conteudo="O cobogó de cimento é um elemento vazado utilizado para dividir espaços sem comprometer a ventilação e a iluminação natural. Ele é amplamente aplicado em fachadas, muros, divisórias internas e áreas externas, proporcionando um design rústico e moderno ao mesmo tempo."
        item01="Resistência e Durabilidade"
        item02="Ventilação Natural"
        item03="Iluminação Eficiente"
        item04="Sustentabilidade"
        item05="Versatilidade"
        imagem={imgCobogo}
      />
      <Produto
        id="tampa"
        titulo="Tampa de Fossa"
        conteudo="A tampa de fossa de cimento é essencial para proteger sistemas de saneamento, evitando acidentes, odores e infiltrações. Fabricada com material resistente, é ideal para residências, comércios e indústrias, garantindo vedação eficiente e longa vida útil."
        item01="Alta Resistência"
        item02="Vedação e Segurança"
        item03="Longevidade"
        item04="Fácil Instalaçãos"
        item05="Sustentabilidade"
        imagem={imgTampa}
      />
      <Produto
        id="pia"
        titulo="Pia de Cimento"
        conteudo="A pia de cimento é uma opção durável e versátil para cozinhas, banheiros e áreas externas. Seu material robusto garante alta resistência ao uso diário, enquanto seu design pode variar entre rústico e moderno, adaptando-se a diferentes estilos de decoração."
        item01="Durabilidade Extrema"
        item02="Fácil Manutenção"
        item03="Personalização"
        item04="Resistência à Água"
        item05="Sustentabilidade"
        imagem={imgPia}
      />
      <Produto
        id="caixa"
        titulo="Caixa de Esgoto"
        conteudo="A caixa de esgoto de concreto é essencial para o correto direcionamento e escoamento de águas residuais, garantindo um sistema de saneamento eficiente e durável. Amplamente utilizada em residências, comércios e indústrias, é uma solução confiável para instalações subterrâneas."
        item01="Alta Resistência"
        item02="Longevidade"
        item03="Vedação Eficiente"
        item04="Manutenção Facilitada "
        item05="Sustentabilidade"
        imagem={imgCaixa}
      />
      <Produto
        id="pote"
        titulo="Pote de Ração"
        conteudo="O pote de ração de cimento é uma opção resistente e funcional para alimentar pets. Seu peso impede que seja facilmente virado, evitando bagunça e desperdício. Além disso, seu design robusto se adapta bem a áreas internas e externas, suportando diferentes condições climáticas."
        item01="Alta Durabilidade"
        item02="Estabilidade"
        item03="Fácil Limpeza"
        item04="Resistência às Intempéries"
        item05="Sustentabilidade"
        imagem={imgPote}
      />

      <section id="localizacao" className="localizacao-section">
        <p className="localizacao-titulo">Localização </p>
        <a href="https://www.google.com/maps/place/R.+Pedrinho+Roschel,+80+-+Vila+Roschel,+S%C3%A3o+Paulo+-+SP,+04891-050/@-23.8404707,-46.733015,19z/data=!3m1!4b1!4m6!3m5!1s0x94ce49e61752d631:0xb5d9ce52905540b9!8m2!3d-23.8404707!4d-46.7323713!16s%2Fg%2F11c5p0_7gl?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D" target="_blank">
          <img src={imgMapa} alt="Mapa" />
        </a>
      </section>

      <section id="sobrenos">
        {" "}
        <SobreNos />{" "}
      </section>

      <div className="fale-conosco">
        <p className="fale-conosco-titulo">Fale Conosco</p>
        <p className="telefone">(11) 97241-6598</p>
      </div>
      <Bottom />
    </div>
  );
}
