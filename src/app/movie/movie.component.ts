import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: any;
  displayedColumns = ['title', 'cast', 'release_date'];
  dataSource = new MovieDataSource(this.api);
  searchTerm: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMovies()
      .subscribe(res => {
        console.log(res);
        this.movies = res;
      }, err => {
        console.log(err);
      });
  }
}

export class MovieDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getMovies();
  }

  disconnect() {

  }
}
