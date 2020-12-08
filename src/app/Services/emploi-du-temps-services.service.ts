
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsServicesService {

  constructor( private http: HttpClient) { }

  emploidutempsService: Observable<any>;
  datadialog: any;

  SaveServiceEmploiTemps(formdata:FormData):Observable<any>{
    const url = 'http://localhost:8080/api/saveEmploiTemps';

    return this.http.post(url, formdata);
  }

  deleteEmploiTemps(emploitemps:any): Observable<any>{
    const url = 'http://localhost:8080/api/deleteEmploiTemps';
  
    return this.http.post(url, emploitemps);
  
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

  getdata(): Observable<any>{
    const url = 'http://localhost:8080/api/getEmploiTemps';
  
    return this.http.get<any>(url);
  
  }

  DownloadEmploiTemps(filename: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
    const url = 'http://localhost:8080/api/DownloadFileEmploiTemps/'+ filename;
    return this.http.get(url, {
  
    });
  }

  getDataDialog(row){
    return this.datadialog = row;
  
  }
  
  public setDataDialog() {
    return this.datadialog;
  }
   
}
