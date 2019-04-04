import { MoviesActionsType, MoviesActions } from '../actions/movies.actions';
import { initialMoviesState, MoviesState } from '../state/movies.state';

export function moviesReducer(
  state = initialMoviesState,
  action: MoviesActions
): MoviesState {
  switch (action.type) {
    case MoviesActionsType.GET_MOVIES: {
      return state;
    }
    case MoviesActionsType.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case MoviesActionsType.GET_MOVIES_ERROR: {
      return state;
    }
    default:
      return state;
  }
}
