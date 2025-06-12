export default function ListaFilmes({ filmes, onEditar, onRemover }) {
  const handleRemover = (id) => {
    if (window.confirm('Tem certeza que deseja remover este filme?')) {
      onRemover(id);
    }
  };

  if (filmes.length === 0) {
    return <p>Nenhum filme cadastrado ainda.</p>;
  }

  return (
    <div className="lista-filmes">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Diretor</th>
            <th>Ano</th>
            <th>Avaliação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme) => (
            <tr key={filme.id}>
              <td>{filme.titulo}</td>
              <td>{filme.diretor}</td>
              <td>{filme.ano}</td>
              <td>{'⭐'.repeat(filme.avaliacao)}</td>
              <td className="acoes">
                <button onClick={() => onEditar(filme.id)}>Editar</button>
                <button onClick={() => handleRemover(filme.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
