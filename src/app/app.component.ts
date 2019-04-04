import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


import { GetMovies } from './store/actions/movies.actions';
import { AppState } from './store/state/app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  readonly title: string = 'movie-app';

  constructor(
    private readonly store$: Store<AppState>,
    ) {
      this.store$.dispatch(new GetMovies());
    }

}
