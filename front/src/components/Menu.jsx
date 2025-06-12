import { useContext } from "react";
import { FilmeContexto } from "../contexts/FilmeContexto";

function Menu() {
  const { setRota } = useContext(FilmeContexto);

  const handleNavegar = (rota) => (e) => {
    e.preventDefault();
    setRota(rota);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleNavegar("/listar")}>Meus Contatos</button>
        </li>
        <li>
          <button onClick={handleNavegar("/novo")}>Novo Contato</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;