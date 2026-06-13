// Componente para exibir as informacoes resumidas dos filmes
function MovieCard({ movie, getMovieDetails }) {
  return (
    <div className="movieCard">
      <img
        src={
          // Verifica se o filme possui poster e o exibe,
          // caso nao possua é exibida uma imagem padrao junto com o titulo do filme
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x450?text=Sem+Imagem"
        }
        alt={movie.Title}
      />

      <div className="movieInfo">
        <h2>{movie.Title}</h2>  
        <p>Ano: {movie.Year}</p>  
        <p>Tipo: {movie.Type}</p>

        {/* Botao para buscar os detalhes dos filmes*/}
        <button onClick={() => getMovieDetails(movie.imdbID)}>
          Ver detalhes
        </button>
      </div>
    </div>
  );
}

export default MovieCard;