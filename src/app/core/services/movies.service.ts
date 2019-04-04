import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = '../assets/movies.json';

  constructor(private http: HttpClient) {  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

}
