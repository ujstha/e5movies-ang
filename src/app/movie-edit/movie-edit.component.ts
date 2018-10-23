import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movieForm: FormGroup;
  id:string = '';
  title:string = '';
  genre: string[] = [' Action', ' Adventure ', ' Animation ', ' Biography ', ' Comedy ', ' Documentary ',
                     ' Drama ', ' Family ', ' Fantasy ', ' History ', ' Horror ', ' Mystery ', 'Musical', 'Music', ' Romance ',
                     ' Sci-Fi ', ' Thriller '];
  movie_poster:string = '';
  storyline:string = '';
  cast:string = '';
  director:string = '';
  release_date: Date;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMovie(this.route.snapshot.params['id']);
    this.movieForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'genre' : [null, Validators.required],
      'movie_poster' : [null, Validators.required],
      'storyline' : [null, Validators.required],
      'cast' : [null, Validators.required],
      'director' : [null, Validators.required],
      'release_date' : [null, Validators.required]
    });
  }

  getMovie(id) {
    this.api.getMovie(id).subscribe(data => {
      this.id = data._id;
      this.movieForm.setValue({
        title: data.title,
        genre: data.genre,
        movie_poster: data.movie_poster,
        storyline: data.storyline,
        cast: data.cast,
        director: data.director,
        release_date: data.release_date
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateMovie(this.id, form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/movie-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  movieDetails() {
    this.router.navigate(['/movie-details', this.id]);
  }
}
