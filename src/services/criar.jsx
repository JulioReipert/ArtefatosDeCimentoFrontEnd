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

  return axios.post("http://localhost:5010/cliente", body);
}

export function CriarMaterial(nome, quantidade) {
  let body = {
    nome: nome,
    quantidade: quantidade,
  };

  return axios.post("http://localhost:5010/materia_prima", body);
}

export function CriarPedido(data_entrega, cliente, endereco, emissao) {
  let body = {
    data_entrega: data_entrega,
    cliente: cliente,
    endereco: endereco,
    emissao: emissao,
  };

  return axios.post("http://localhost:5010/pedido", body);
}

export function CriarProduto(
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

  return axios.post("http://localhost:5010/produto", body);
}

export function CriarItemPedido(qtd, pedido, item) {
  let body = {
    qtd: qtd,
    pedido: pedido,
    item: item,
  };

  return axios.post("http://localhost:5010/item_pedido", body);
}
