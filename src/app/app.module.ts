import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { moviesReducer } from './store/reducers/movies.reducer';
import { MoviesService } from './core/services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/effects/movies.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesComponent } from './movies/movies.component';
import { appReducers } from './store/reducers/app.reducers';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    EffectsModule.forRoot([MoviesEffects]),
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
