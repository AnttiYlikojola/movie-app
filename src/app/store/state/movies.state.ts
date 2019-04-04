import { Movie } from '../../core/models/movie.interface';

export interface MoviesState {
  movies: Movie[];
}

export const initialMoviesState: MoviesState = {
  movies: [],
};
