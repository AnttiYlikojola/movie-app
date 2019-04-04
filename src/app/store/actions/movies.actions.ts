import { Action } from '@ngrx/store';
import { Movie } from '../../core/models/movie.interface';

export enum MoviesActionsType {
  GET_MOVIES = 'LOAD movies',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_ERROR = 'LOADing ERROR'
}

export class GetMovies implements Action {
  readonly type = MoviesActionsType.GET_MOVIES;
}

export class GetMoviesSuccess implements Action {
  readonly type = MoviesActionsType.GET_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {}
}

export class GetMoviesError implements Action {
  readonly type = MoviesActionsType.GET_MOVIES_ERROR;
}

export type MoviesActions = GetMovies | GetMoviesSuccess | GetMoviesError;