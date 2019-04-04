import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Movie } from '../core/models/movie.interface';
import { Observable } from 'rxjs';
import { AppState } from '../store/state/app.state';
import { getMovies } from '../store/selectors/movies.selector';
import { MoviesService } from '../core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  constructor(
    private readonly store$: Store<AppState>,
    ) { }
  movies$: Observable<Movie[]>;

  ngOnInit() {
  }
  onClick() {
    this.movies$ = this.store$.pipe(select(getMovies));
  }
}
