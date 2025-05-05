import axios from "axios";

export function CriarCliente(nome, email, telefone, celular, tipoDoc, numDoc) {
  let body = {
    nome: nome,
    email: email,
    telefone: telefone,
    celular: celular,
    tipo_documento: tipoDoc,
    numero_documento: numDoc,
  };

  axios.post("http://localhost:5010/cliente", body);
}
