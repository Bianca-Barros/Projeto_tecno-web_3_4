import { useContext } from 'react';
import { FilmeContexto } from './contexts/FilmeContexto';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import ListarFilmes from './pages/ListarFilmes';
import AdicionarFilme from './pages/AdicionarFilme';
import EditarFilme from './pages/EditarFilme';

export default function App() {
  const { rotaAtual } = useContext(FilmeContexto);

  return (
    <div className="app">
      <Cabecalho />
      <Conteudo>
        {rotaAtual === '/listar' && <ListarFilmes />}
        {rotaAtual === '/adicionar' && <AdicionarFilme />}
        {rotaAtual.startsWith('/editar') && <EditarFilme />}
      </Conteudo>
    </div>
  );
}