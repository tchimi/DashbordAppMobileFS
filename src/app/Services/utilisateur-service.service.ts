import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs'
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  user: Observable<any>;
  datadialog: any;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  saveServiceUser(formdata:any): Observable<any>{
    const url = 'http://localhost:8080/api/saveUser';
    return this.http.post(url, formdata);
}

getdata(): Observable<any>{
  const url = 'http://localhost:8080/api/listUser';

  return this.http.get<any>(url);

}

getDataRoleUser(username:string):Observable<any>{
  const url = 'http://localhost:8080/api/getlistRoleByUsername/'+username+'';

  return this.http.get<any>(url);

}

saveRoleUser(username:string,role=[]):Observable<any>{
  const url = 'http://localhost:8080/api/addRoleToUser/'+username+'/'+role+'';

  return this.http.get<any>(url);

}

saveUser(user: any): Observable<any>{
  const url = 'http://localhost:8080/api/saveUtilisateur';

  return this.http.post(url, user);

}
updateUser(user: any, idusername:string): Observable<any>{
  const url = 'http://localhost:8080/api/UpdateUtilisateur/'+idusername+'';

  return this.http.post(url, user);

}


deleteUser(user: any): Observable<any>{
  const url = 'http://localhost:8080/api/deleteUtilisateur';
  return this.http.post(url, user);

}

getDataDialog(row){
  return this.datadialog = row;

}

setDataDialog(){
  return this.datadialog;
}
}
