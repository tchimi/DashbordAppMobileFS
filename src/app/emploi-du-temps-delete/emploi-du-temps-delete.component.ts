import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EmploiDuTempsServicesService } from '../Services/emploi-du-temps-services.service';


@Component({
  templateUrl: './emploi-du-temps-delete.component.html',
  styleUrls: ['./emploi-du-temps-delete.component.css']
})
export class EmploiDuTempsDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <EmploiDuTempsDeleteComponent>, private toast: ToastrService, private http: HttpClient,
    private emploidutempsService: EmploiDuTempsServicesService) { }

    emploiForm = new FormGroup({
    idemploitemps: new FormControl(''),
    semestreCODESEMESTRE: new FormControl(''),
    anneeacadCODEANNEE: new FormControl(''),
    namefile: new FormControl(''),
    userUsername: new FormControl(''), 
    emploitempscol: new FormControl(''),
    etapeCODEETAPE: new FormControl('')
  })

  ngOnInit(): void {
    this.emploiForm.setValue(this.emploidutempsService.setDataDialog());
    console.log(this.emploiForm.value)
  }


  CloseDialog(){
    this.dialogRef.close();
    //this.toast.success('Operation effectuée!', 'Succès');
  }

  onDeleteEmploiTemps() {

    this.emploidutempsService.deleteEmploiTemps(this.emploiForm.value).subscribe(data => {
      this.emploiForm.reset();
      this.toast.success('Operation effectuée!', 'Succès');
      this.dialogRef.close();
    }, error => {
      this.toast.warning("Echec de l'oparation", 'Warning');
    });
  }

}
