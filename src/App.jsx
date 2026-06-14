import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import cinesearch from "./assets/cinesearch.png"

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "f3a5e10d";

  // Funcao para buscar os filmes pelo texto digitado
  async function searchMovies() {
    //Verifica se o campo esta vazio apos remover espaços
    if (search.trim() === "") {
      setError("Digite o nome de um filme ou série.");
      setMovies([]);
      setSelectedMovie(null);
      return;
    }

    try {
      setLoading(true); // Exibe a mensagem de carregamento
      setError(""); // Limpa erros anteriores
      setSelectedMovie(null); //Fecha os detalhes do filme que estava aberto

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
      );
      
      const data = await response.json();

      if (data.Response === "False") {
        setError("Nenhum filme encontrado.");
        setMovies([]);
        return;
      }
      setMovies(data.Search);
    } catch (error) {
      setError("Erro ao buscar os filmes.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  // Funcao para buscar os detalhes de um filme específico
  async function getMovieDetails(id) {
    try {
      setLoading(true); // Exibe a mensagem de carregamento
      setError(""); // Limpa erros anteriores

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
      );

      const data = await response.json();

      if (data.Response === "False") {
        setError("Não foi possível carregar os detalhes.");
        return;
      }
      setSelectedMovie(data); //Armazena o filme selecionado
    } catch (error) {
      setError("Erro ao carregar os detalhes do filme.");
    } finally {
      setLoading(false);
    }
  }

  // Funcao para fechar o overlay do filme
  function closeDetails() {
    setSelectedMovie(null);
  }

  return (
    <div className="app">
      <header className="header">
        
        <div className="logo">
          <img src={cinesearch} alt="Logo CineSearch" className="cineSearch" />
        </div>

        <div className="headerContent">
          <h1>CineSearch</h1>
          <p>Busque por filmes e séries</p>

          {/* Exibe o componente de busca */}
          <SearchBar
            search={search}
            setSearch={setSearch}
            searchMovies={searchMovies}
          />
        </div>
      </header>

      {loading && <p className="message">Carregando...</p>}

      {error && <p className="error">{error}</p>}

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} closeDetails={closeDetails} />
      )}

      {/* Lista de cards dos filmes encontrados */}
      <section className="moviesContainer">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            getMovieDetails={getMovieDetails}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
