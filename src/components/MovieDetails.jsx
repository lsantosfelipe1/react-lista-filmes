import { IoCloseSharp } from "react-icons/io5";

// Componente para exibir as informacoes completas dos filmes
function MovieDetails({ movie, closeDetails }) {
  return (
    // Overlay para criar o desfoque no fundo
    <div className="modalOverlay">
      <div className="modal">
        <button className="closeBtn" onClick={closeDetails}>
          <IoCloseSharp size={25}/>
        </button>

        <div className="detailsContent">
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

          <div>
            <h2>{movie.Title}</h2>

            <p>
              <strong>Ano:</strong> {movie.Year}
            </p>

            <p>
              <strong>Gênero:</strong> {movie.Genre}
            </p>

            <p>
              <strong>Diretor:</strong> {movie.Director}
            </p>

            <p>
              <strong>Atores:</strong> {movie.Actors}
            </p>

            <p>
              <strong>Avaliação IMDb:</strong> {movie.imdbRating}
            </p>

            <p>
              <strong>Sinopse:</strong> {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
