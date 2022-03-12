import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpErrorHandle } from '../handle/http.error.hadle';
import { HttpErrorResponseHandle } from '../handle/http.error.response.hadle';

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
}
