import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { UtilisateurServiceService } from '../../../Services/utilisateur-service.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurServiceService,
    private http: HttpClient, private toast: ToastrService) { }

    hide = true;
    myControl = new FormControl();

    UserForm = new FormGroup({
      //etapeCODEETAPE: new FormControl(''),
      username: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required), 
      password: new FormControl('', Validators.required),

    })


  ngOnInit(): void {
  }

  onUpload(){
    //this.emploiForm.value.etapeCODEETAPE=this.myControl.value
    //console.log(this.myControl.value)
    
    if (this.UserForm.valid == true){
      this.utilisateurService.saveServiceUser(this.UserForm.value).subscribe(data => {
        this.UserForm.reset();
        this.toast.success('Operation effectuée!', 'Succès');
    }, error => {
      this.toast.error('Echec de l'+'operation:' + ' ' + error , 'Erreur' );
    });
   }else{
    this.toast.info('Veuillez remplir le champ Svp !', 'Information');
      }
    //this.noteService.saveServiceNote(fd).subscribe((response)=>{
    //console.log(response)
   
  }

}
