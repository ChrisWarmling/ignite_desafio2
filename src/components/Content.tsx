import { MovieCard } from "./MovieCard";
import {ContainerProps} from "../interfaces/movie"

export function Content({movies, selectedGenre} : ContainerProps) {
  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}