import { useContext, useState, useEffect } from 'react';
import { FilmeContexto } from '../contexts/FilmeContexto';
import FormularioFilme from '../components/FormularioFilme';

export default function AdicionarFilme() {
  const { adicionarFilme, setRotaAtual } = useContext(FilmeContexto);

  const handleAdicionar = (filme) => {
    adicionarFilme(filme).then(() => {
      setRotaAtual('/listar');
    });
  };

  return (
    <div className="pagina-adicionar">
      <h2>Adicionar Novo Filme</h2>
      <button onClick={() => setRotaAtual('/listar')}>Voltar</button>
      
      <FormularioFilme 
        onSubmit={handleAdicionar}
      />
    </div>
  );
}