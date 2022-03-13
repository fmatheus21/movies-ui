import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpErrorHandle } from '../handle/http.error.hadle';
import { HttpErrorResponseHandle } from '../handle/http.error.response.hadle';
import { MovieContent } from '../http/movie.content';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MovieFilter } from '../filter/movie.filter';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly apiUrl = `${environment.apiUrl}/movies`;
  private httpErrorHandle: HttpErrorHandle = new HttpErrorHandle();
  private httpErrorResponseHandle: HttpErrorResponseHandle = new HttpErrorResponseHandle();

  constructor(
    private http: HttpClient
  ) { }

  findAllByFilter(filter: MovieFilter, page: number, size: number): Observable<MovieContent> {

    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    if (filter.year) {
      params = params.append('year', filter.year);
    }

    if (filter.title) {
      params = params.append('title', filter.title);
    }

    if (filter.rating) {
      params = params.append('rating', filter.rating);
    }

    if (filter.codeImdb) {
      params = params.append('codeImdb', filter.codeImdb);
    }

    return this.http.get<MovieContent>(`${this.apiUrl}`, { params });

  }

}
