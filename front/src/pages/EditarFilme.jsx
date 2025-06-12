import { useContext, useEffect, useState } from "react";
import { buscarFilmePorId, atualizarFilme } from "../services/FilmeService";
import { FilmeContexto } from "../contexts/FilmeContexto";
import FormularioFilme from "../components/FormularioFilme";

function EditarFilme() {
  const { rotaAtual, setRotaAtual } = useContext(FilmeContexto);
  const [filme, setFilme] = useState({});
  const [erro, setErro] = useState("");
  const id = rotaAtual.replace("/editar/", "");

  const carregar = async () => {
    const resposta = await buscarFilmePorId(id);
    if (resposta.sucesso) {
      setFilme(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, [id]);

  const handleSalvar = async (filmeAtualizado) => {
    const resposta = await atualizarFilme(id, filmeAtualizado);
    if (resposta.sucesso) {
      setErro("");
      setRotaAtual("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <div className="pagina-editar">
      <h2>Editar Filme</h2>
      <button onClick={() => setRotaAtual("/listar")}>Voltar</button>
      <FormularioFilme onSubmit={handleSalvar} valores={filme} />
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}

export default EditarFilme;
