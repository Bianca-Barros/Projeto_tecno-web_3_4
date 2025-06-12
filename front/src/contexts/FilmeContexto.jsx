import { createContext, useState } from 'react';
import {
  adicionarFilme as adicionarFilmeAPI,
  atualizarFilme as atualizarFilmeAPI,
  removerFilme as removerFilmeAPI,
} from '../services/FilmeService';

export const FilmeContexto = createContext();

export function ProvedorFilmes({ children }) {
  const [filmes, setFilmes] = useState([]);
  const [rotaAtual, setRotaAtual] = useState('/listar');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const adicionarFilme = async (novoFilme) => {
    try {
      setCarregando(true);
      const resposta = await adicionarFilmeAPI(novoFilme);
      if (resposta.sucesso) {
        // Atualizar estado de forma segura usando função callback
        setFilmes((filmesAtuais) => [...filmesAtuais, resposta.dados]);
        setErro(null);
      } else {
        setErro(resposta.mensagem);
      }
    } catch {
      setErro('Erro ao adicionar filme');
    } finally {
      setCarregando(false);
    }
  };

  const atualizarFilme = async (id, filmeAtualizado) => {
    try {
      setCarregando(true);
      const resposta = await atualizarFilmeAPI(id, filmeAtualizado);
      if (resposta.sucesso) {
        setFilmes((filmesAtuais) =>
          filmesAtuais.map((filme) =>
            filme.id === id ? resposta.dados : filme
          )
        );
        setErro(null);
      } else {
        setErro(resposta.mensagem);
      }
    } catch {
      setErro('Erro ao atualizar filme');
    } finally {
      setCarregando(false);
    }
  };

  const removerFilme = async (id) => {
    try {
      setCarregando(true);
      const resposta = await removerFilmeAPI(id);
      if (resposta.sucesso) {
        setFilmes((filmesAtuais) => filmesAtuais.filter((filme) => filme.id !== id));
        setErro(null);
      } else {
        setErro(resposta.mensagem);
      }
    } catch {
      setErro('Erro ao remover filme');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <FilmeContexto.Provider
      value={{
        filmes,
        setFilmes,
        rotaAtual,
        setRotaAtual,
        carregando,
        erro,
        adicionarFilme,
        atualizarFilme,
        removerFilme,
      }}
    >
      {children}
    </FilmeContexto.Provider>
  );
}
