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

export function EditarProduto(
  id,
  nome,
  quantidade,
  comprimento,
  altura,
  largura,
  cor,
  peso,
  valor,
  materia_prima
) {
  let body = {
    nome: nome,
    quantidade: quantidade,
    comprimento: comprimento,
    altura: altura,
    largura: largura,
    cor: cor,
    peso: peso,
    valor: valor,
    materia_prima: materia_prima,
  };

  return axios.put(`http://localhost:5010/produto/${id}`, body);
}

export function EditarPedido(id, data_entrega, cliente, endereco) {
  let body = {
    data_entrega: data_entrega,
    cliente: cliente,
    endereco: endereco,
  };
  return axios.put(`http://localhost:5010/pedido/${id}`, body);
}
