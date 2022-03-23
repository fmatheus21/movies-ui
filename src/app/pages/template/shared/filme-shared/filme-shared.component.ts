import { Component, OnInit } from '@angular/core';
import { MovieFilter } from 'src/app/controller/filter/movie.filter';
import { MovieContent } from 'src/app/controller/http/movie.content';
import { MovieResponse } from 'src/app/controller/http/response/movie.response';
import { Paginator } from 'src/app/controller/model/paginator';
import { MovieService } from 'src/app/controller/service/movie.service';

@Component({
  selector: 'app-filme-shared',
  templateUrl: './filme-shared.component.html',
  styleUrls: ['./filme-shared.component.css'],
})
export class FilmeSharedComponent implements OnInit {
  //movies: MovieResponse[] = [];
  movieObject: MovieContent = new MovieContent();
  filter: MovieFilter = new MovieFilter();
  paginator: Paginator = new Paginator();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.findAllByFilter();
  }

  public findAllByFilter() {
    this.movieService
      .findAllByFilter(this.filter, this.paginator.page, this.paginator.size)
      .subscribe((data: MovieContent) => {
        // var content = JSON.parse(JSON.stringify(data));
        this.movieObject = data;
        console.log(this.movieObject);
        console.log(data);
        this.loadPaginator(data);
      });
  }

  private loadPaginator(data: any) {
    var paginator = JSON.parse(JSON.stringify(data));
    this.paginator.empty = paginator.empty;
    this.paginator.first = paginator.first;
    this.paginator.last = paginator.last;
    this.paginator.number = paginator.number;
    this.paginator.numberOfElements = paginator.numberOfElements;
    this.paginator.size = paginator.size;
    this.paginator.totalElements = paginator.totalElements;
    this.paginator.totalPages = paginator.totalPages;
  }

  public paginate(event: any) {
    this.paginator.page = event.page;
    this.paginator.size = event.rows;
    this.findAllByFilter();
  }
}
