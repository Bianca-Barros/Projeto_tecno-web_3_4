import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/filmes';

export const buscarFilmes = async () => {
  try {
    const resposta = await axios.get(API_URL);
    return { sucesso: true, dados: resposta.data };
  } catch (erro) {
    return { sucesso: false, mensagem: 'Erro ao buscar filmes' };
  }
};

export const buscarFilmePorId = async (id) => {
  try {
    const resposta = await axios.get(`${API_URL}/${id}`);
    return { sucesso: true, dados: resposta.data };
  } catch (erro) {
    return { sucesso: false, mensagem: 'Erro ao buscar filme por ID' };
  }
};

export const adicionarFilme = async (filme) => {
  try {
    const resposta = await axios.post(API_URL, filme);
    return { sucesso: true, dados: resposta.data };
  } catch (erro) {
    return { sucesso: false, mensagem: 'Erro ao adicionar filme' };
  }
};

export const atualizarFilme = async (id, filmeAtualizado) => {
  try {
    const resposta = await axios.put(`${API_URL}/${id}`, filmeAtualizado);
    return { sucesso: true, dados: resposta.data };
  } catch (erro) {
    return { sucesso: false, mensagem: 'Erro ao atualizar filme' };
  }
};

export const removerFilme = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { sucesso: true };
  } catch (erro) {
    return { sucesso: false, mensagem: 'Erro ao remover filme' };
  }
};
