import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';

import { moviesReducer } from './movies.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  movies: moviesReducer,
};
