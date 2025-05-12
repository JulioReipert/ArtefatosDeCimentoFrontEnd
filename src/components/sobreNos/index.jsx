import "./index.scss";
import imgSobreNos from "../../assets/images/img-sobre-nos.png";

export default function SobreNos() {
  return (
    <div className="comp-sobreNos">
      <div className="sobre-nos">
        <h1 className="titulo">Sobre Nós</h1>
        <h2 className="descricao">
          A Busquets Artefatos de Cimento é uma microempresa especializada na
          produção artesanal de peças em cimento, feitas à mão com qualidade e
          precisão. Com mais de 3 anos de experiência, Ricardo Busquets Roschel
          cria cobogós, caixas de esgoto, pias e potes de ração para cachorro,
          todos sob medida e com excelente acabamento. Nosso compromisso é
          oferecer produtos duráveis e personalizados, unindo funcionalidade e
          estética para atender às necessidades de cada cliente.
        </h2>
      </div>
      <div className="img-sobreNos">
        <img src={imgSobreNos} alt="imagem sobre nós" />
      </div>
    </div>
  );
}
