import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../core/services/movies.service';
import { MoviesActionsType, GetMovies, GetMoviesSuccess, GetMoviesError} from '../actions/movies.actions';
import { catchError, mergeMap, map, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/core/models/movie.interface';

@Injectable()
export class MoviesEffects {

  constructor(
      private actions$: Actions,
      private moviesService: MoviesService
  ) {}

  @Effect() getMovies$ = this.actions$
      .pipe(
          ofType(MoviesActionsType.GET_MOVIES),
          switchMap(() => this.moviesService.getMovies()
              .pipe(
                  map(movies => new GetMoviesSuccess(movies)),
                  catchError(error => of(new GetMoviesError()))
              ))
          );
}

