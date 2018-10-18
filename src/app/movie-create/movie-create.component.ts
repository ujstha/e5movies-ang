import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://e5movies.herokuapp.com/api/';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movieForm: FormGroup;
  title:string='';
  genre: string[] = [' Action', ' Adventure ', ' Animation ', ' Biography ', ' Comedy ', ' Documentary ',
                     ' Drama ', ' Family ', ' Fantasy ', ' History ', ' Horror ', ' Mystery ', ' Romance ',
                     ' Sci-Fi ', ' Thriller '];
  movie_poster:string='';
  storyline:string='';
  cast:string='';
  director:string='';
  release_date: Date;
  public uploader: FileUploader = new FileUploader({url: URL});

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'genre' : [null, Validators.required],
      'movie_poster' : [null, Validators.required],
      'storyline' : [null, Validators.required],
      'cast' : [null, Validators.required],
      'director' : [null, Validators.required],
      'release_date' : [null, Validators.required],
      'image' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postMovie(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/movie-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
