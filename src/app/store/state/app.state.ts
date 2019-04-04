import { initialMoviesState, MoviesState } from './movies.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    router?: RouterReducerState;
    movies: MoviesState;
}

export const initialAppState: AppState = {
    movies: initialMoviesState,
};

export function getInitialState(): AppState {
    return initialAppState;
}
