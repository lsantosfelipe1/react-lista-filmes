import { FiSearch } from "react-icons/fi";

//Componente responsavel pela barra de busca
function SearchBar({ search, setSearch, searchMovies }) {
  function handleSubmit(event) {
    event.preventDefault();     //Evita que a pagina recarregue
    searchMovies();
  }

  return (
    //Formulario da barra de pesquisa
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de um filme ou série..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}     // Atualiza o estado "search" com o texto digitado
      />

      <button>
        <FiSearch size={25} />
      </button>
    </form>
  );
}

export default SearchBar;
