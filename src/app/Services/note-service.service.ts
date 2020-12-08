import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs'
import { ResponseType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  
  constructor(private http: HttpClient) { }

  noteService: Observable<any>;
  datadialog: any;
 
  saveServiceNote(formdata:FormData): Observable<any>{
    const url = 'http://localhost:8080/api/saveNote';

    return this.http.post(url, formdata);

}

getdata(): Observable<any>{
  const url = 'http://localhost:8080/api/getNote';

  return this.http.get<any>(url);

}

DownloadNote(filename: any): Observable<any>{
  let headers = new HttpHeaders();
  headers = headers.append('Accept', 'text/csv; charset=utf-8');
  const url = 'http://localhost:8080/api/DownloadFileNote/'+ filename;
  return this.http.get(url, {

  });
}

  getlistEtape(): Observable<any>{
    const url = 'http://localhost:8080/api/listeEtape';
    return this.http.get<any>(url);
}


getlisteAnneeacad(): Observable<any>{
  const url = 'http://localhost:8080/api/listeAnneeacad';
  return this.http.get<any>(url);
}

getlisteSemestre(): Observable<any>{
  const url = "http://localhost:8080/api/listeSemestre"
  return this.http.get<any>(url);
}

deleteNote(note:any): Observable<any>{
  const url = 'http://localhost:8080/api/deleteNote';

  return this.http.post(url, note);

}


getDataDialog(row){
  return this.datadialog = row;

}

public setDataDialog() {
  return this.datadialog;
}
 

}

