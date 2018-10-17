import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any;

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
