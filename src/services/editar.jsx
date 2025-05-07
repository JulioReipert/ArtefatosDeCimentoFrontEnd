import axios from "axios";

export function EditarCliente(
  id,
  nome,
  email,
  telefone,
  celular,
  tipoDoc,
  numDoc
) {
  let body = {
    nome: nome,
    email: email,
    telefone: telefone,
    celular: celular,
    tipo_documento: tipoDoc,
    numero_documento: numDoc,
  };

  return axios.put(`http://localhost:5010/cliente/${id}`, body);
}

export function EditarMateria(id, nome, quantidade) {
  let body = {
    nome: nome,
    quantidade: quantidade,
  };

  return axios.put(`http://localhost:5010/materia_prima/${id}`, body);
}
