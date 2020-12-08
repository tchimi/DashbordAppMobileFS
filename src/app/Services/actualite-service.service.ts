import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ActualiteServiceService {

  constructor(private http: HttpClient) { }
  ActualiteService: Observable<any>;
  datadialog: any;

  saveServiceActualite(formdata:FormData): Observable<any>{
    const url = 'http://localhost:8080/api/saveActualite';
    return this.http.post(url, formdata);
}
}
