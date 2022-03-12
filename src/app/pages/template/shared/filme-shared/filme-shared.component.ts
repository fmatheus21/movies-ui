import { Component, OnInit } from '@angular/core';
import { MovieContent } from 'src/app/controller/http/movie.content';

@Component({
  selector: 'app-filme-shared',
  templateUrl: './filme-shared.component.html',
  styleUrls: ['./filme-shared.component.css']
})
export class FilmeSharedComponent implements OnInit {

  movies: MovieContent = new MovieContent();

  constructor() { }

  ngOnInit(): void {
  }

}
