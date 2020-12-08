import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProgramexamServiceService {

  constructor(private http: HttpClient) { }
  datadialog: Observable<any> ;
  ProgramexamService: any;

  saveServiceProgramexam(formdata:FormData): Observable<any>{
    const url = 'http://localhost:8080/api/saveProgramexam';

    return this.http.post(url, formdata);

}
getdata(): Observable<any>{
  const url = 'http://localhost:8080/api/getProgramexam';

  return this.http.get<any>(url);

}
DownloadProgramexam(filename: any): Observable<any>{
  let headers = new HttpHeaders();
  headers = headers.append('Accept', 'text/csv; charset=utf-8');
  const url = 'http://localhost:8080/api/DownloadFileProgramexam/'+ filename;
  return this.http.get(url, {

  });
}
deleteProgramexam(programexam:any): Observable<any>{
  const url = 'http://localhost:8080/api/deleteProgramexam';

  return this.http.post(url, programexam);

}

getlisteNiveau(): Observable<any>{
  const url = "http://localhost:8080/api/listeNiveau"
  return this.http.get<any>(url);
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

getDataDialog(row){
  return this.datadialog = row;

}



public setDataDialog() {
  return this.datadialog;
}

}
