import { useState, useEffect } from 'react';

export default function FormularioFilme({ onSubmit, dadosIniciais }) {
  const [filme, setFilme] = useState({
    titulo: '',
    diretor: '',
    ano: '',
    genero: '',
    duracao: '',
    avaliacao: 0
  });

  const [erros, setErros] = useState({});

  useEffect(() => {
    if (dadosIniciais) {
      setFilme(dadosIniciais);
    }
  }, [dadosIniciais]);

  const validar = () => {
    const novosErros = {};

    if (!filme.titulo) novosErros.titulo = 'Título é obrigatório';
    if (!filme.diretor) novosErros.diretor = 'Diretor é obrigatório';
    if (!filme.ano || filme.ano < 1895) novosErros.ano = 'Ano inválido';
    if (!filme.genero) novosErros.genero = 'Gênero é obrigatório';
    if (!filme.duracao) novosErros.duracao = 'Duração é obrigatória';
    if (filme.avaliacao < 0 || filme.avaliacao > 5) novosErros.avaliacao = 'Avaliação deve ser entre 0 e 5';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit(filme);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-filme">
      <div className="grupo-formulario">
        <label>Título*</label>
        <input
          type="text"
          value={filme.titulo}
          onChange={(e) => setFilme({ ...filme, titulo: e.target.value })}
        />
        {erros.titulo && <span className="erro">{erros.titulo}</span>}
      </div>

      <div className="grupo-formulario">
        <label>Diretor*</label>
        <input
          type="text"
          value={filme.diretor}
          onChange={(e) => setFilme({ ...filme, diretor: e.target.value })}
        />
        {erros.diretor && <span className="erro">{erros.diretor}</span>}
      </div>

      <div className="grupo-formulario">
        <label>Ano*</label>
        <input
          type="number"
          value={filme.ano}
          onChange={(e) => setFilme({ ...filme, ano: parseInt(e.target.value) })}
        />
        {erros.ano && <span className="erro">{erros.ano}</span>}
      </div>

      <div className="grupo-formulario">
        <label>Gênero*</label>
        <input
          type="text"
          value={filme.genero}
          onChange={(e) => setFilme({ ...filme, genero: e.target.value })}
        />
        {erros.genero && <span className="erro">{erros.genero}</span>}
      </div>

      <div className="grupo-formulario">
        <label>Duração (min)*</label>
        <input
          type="text"
          value={filme.duracao}
          onChange={(e) => setFilme({ ...filme, duracao: e.target.value })}
        />
        {erros.duracao && <span className="erro">{erros.duracao}</span>}
      </div>

      <div className="grupo-formulario">
        <label>Avaliação (0 a 5)*</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={filme.avaliacao}
          onChange={(e) => setFilme({ ...filme, avaliacao: parseFloat(e.target.value) })}
        />
        {erros.avaliacao && <span className="erro">{erros.avaliacao}</span>}
      </div>

      <button type="submit">
        Salvar Filme
      </button>
    </form>
  );
}
