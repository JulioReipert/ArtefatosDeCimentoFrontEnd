import "./index.scss";
import Header from "../../components/header";
import SobreNos from "../../components/sobreNos";
import Carrossel from "../../components/carrossel";
import Produto from "../../components/produtos";

import imgCobogo from "../../assets/images/cobogo_4pontas.png";
import imgCaixa from "../../assets/images/caixa_esgoto.png";
import imgPia from "../../assets/images/pia_cimento.png";
import imgTampa from "../../assets/images/tampa_esgoto.png";
import imgPote from "../../assets/images/pote_racao.png";
import Bottom from "../../components/bottom";

export default function App() {
  return (
    <div className="page-app">
      <Header />
      <SobreNos />
      <div className="carrossel">
        <Carrossel titulo="Cobogó" imagem={imgCobogo} />
        <Carrossel titulo="Caixa de Esgoto" imagem={imgCaixa} />
        <Carrossel titulo="Pia de Cimento" imagem={imgPia} />
        <Carrossel titulo="Tampa de Fossa" imagem={imgTampa} />
        <Carrossel titulo="Pote de Ração" imagem={imgPote} />
      </div>
      <Produto
        titulo="Tampa de Fossa"
        conteudo="A tampa de fossa de cimento é essencial para proteger sistemas de saneamento, evitando acidentes, odores e infiltrações. Fabricada com material resistente, é ideal para residências, comércios e indústrias, garantindo vedação eficiente e longa vida útil."
        item01="Alta Resistência"
        item02="Vedação e Segurança"
        item03="Longevidade"
        item04="Fácil Instalaçãos"
        item05="Sustentabilidade"
      />

      <Produto
        titulo="Pia de Cimento"
        conteudo="A pia de cimento é uma opção durável e versátil para cozinhas, banheiros e áreas externas. Seu material robusto garante alta resistência ao uso diário, enquanto seu design pode variar entre rústico e moderno, adaptando-se a diferentes estilos de decoração."
        item01="Durabilidade Extrema"
        item02="Fácil Manutenção"
        item03="Personalização"
        item04="Resistência à Água"
        item05="Sustentabilidade"
      />

      <Produto
        titulo="Caixa de Esgoto"
        conteudo="A caixa de esgoto de concreto é essencial para o correto direcionamento e escoamento de águas residuais, garantindo um sistema de saneamento eficiente e durável. Amplamente utilizada em residências, comércios e indústrias, é uma solução confiável para instalações subterrâneas."
        item01="Alta Resistência"
        item02="Longevidade"
        item03="Vedação Eficiente"
        item04="Manutenção Facilitada "
        item05="Sustentabilidade"
      />

      <Produto
        titulo="Pote de Ração"
        conteudo="O pote de ração de cimento é uma opção resistente e funcional para alimentar pets. Seu peso impede que seja facilmente virado, evitando bagunça e desperdício. Além disso, seu design robusto se adapta bem a áreas internas e externas, suportando diferentes condições climáticas."
        item01="Alta Durabilidade"
        item02="Estabilidade"
        item03="Fácil Limpeza"
        item04="Resistência às Intempéries"
        item05="Sustentabilidade"
      />

      <Bottom />
    </div>
  );
}
