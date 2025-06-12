import { useContext, useEffect } from 'react';
import { FilmeContexto } from '../contexts/FilmeContexto';
import ListaFilmes from '../components/ListaFilmes';
import { buscarFilmes } from '../services/FilmeService';

export default function ListarFilmes() {
  const { 
    filmes, 
    setFilmes, 
    setRotaAtual,
    carregando,
    erro,
    removerFilme  // aqui
  } = useContext(FilmeContexto);

  useEffect(() => {
    const carregarFilmes = async () => {
      const resultado = await buscarFilmes();
      if (resultado.sucesso) {
        setFilmes(resultado.dados);
      }
    };
    carregarFilmes();
  }, [setFilmes]);

  if (carregando) return <div>Carregando...</div>;
  if (erro) return <div className="erro">{erro}</div>;

  return (
    <div className="pagina-listagem">
      <div className="cabecalho-listagem">
        <h2>Catálogo de Filmes</h2>
        <button onClick={() => setRotaAtual('/adicionar')}>
          Adicionar Novo Filme
        </button>
      </div>
      
      <ListaFilmes 
        filmes={filmes}
        onEditar={(id) => setRotaAtual(`/editar/${id}`)}
        onRemover={removerFilme}  
      />
    </div>
  );
}
