import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TeammateComponent } from './teammate/teammate.component';
import { MatVideoModule } from 'mat-video';
import { HomeComponent } from './home/home.component';
import { MovieFilterPipe } from './movie-filter.pipe';

const appRoutes: Routes = [
  {
    path: '#',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'movies',
    component: MovieComponent,
    data: { title: 'Movies List' }
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailComponent,
    data: { title: 'Movie Details' }
  },
  {
    path: 'movie-create',
    component: MovieCreateComponent,
    data: { title: 'Create Movie' }
  },
  {
    path: 'movie-edit/:id',
    component: MovieEditComponent,
    data: { title: 'Edit Movie' }
  },
  {
    path: 'aboutus',
    component: AboutComponent,
    data: { title: 'About Us' }
  },
  { path: '',
    redirectTo: '/#',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieEditComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    TeammateComponent,
    HomeComponent,
    MovieFilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
