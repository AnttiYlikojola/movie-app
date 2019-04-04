import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { MoviesState } from '../state/movies.state';

export const  selectMovies = (state: AppState) => state.movies;

export const getMovies = createSelector(
    selectMovies,
    (state: MoviesState) => state.movies
)

