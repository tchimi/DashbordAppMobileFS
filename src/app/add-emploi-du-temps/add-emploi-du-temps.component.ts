import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EmploiDuTempsServicesService } from '../Services/emploi-du-temps-services.service';
import {FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';


interface Semestre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-liste-emploi-du-temps',
  templateUrl: './add-emploi-du-temps.component.html',
  styleUrls: ['./add-emploi-du-temps.component.css']
})
export class AddEmploiDuTempsComponent implements OnInit {

  constructor(private emploidutempsService: EmploiDuTempsServicesService, public dialogRef: MatDialogRef <AddEmploiDuTempsComponent>,
    private http: HttpClient, private toast: ToastrService) { }
  listeAnneeacad:string;
  listeSemestre:string;
  selectFile :File=null;
  myControl = new FormControl();

  emploiForm = new FormGroup({
    //etapeCODEETAPE: new FormControl(''),
    semestreCODESEMESTRE: new FormControl('', Validators.required),
    anneeacadCODEANNEE: new FormControl('', Validators.required),  
  })


  ngOnInit(): void {
    this.getlisteAnneeacad()
    this.getlisteSemestre()
  }

  onselect(event){
    this.selectFile = <File>event.target.files[0]
    console.log(this.selectFile)
  }

  CloseDialog(){
    this.dialogRef.close();
    //this.toast.success('Operation effectuée!', 'Succès');
  }

  getlisteAnneeacad(){
    this.emploidutempsService.getlisteAnneeacad().subscribe(data=>{
      this.listeAnneeacad = data
    })
   }

   getlisteSemestre(){
    this.emploidutempsService.getlisteSemestre().subscribe(data=>{
      this.listeSemestre = data
    })
   }

   onUpload(){
    //this.emploiForm.value.etapeCODEETAPE=this.myControl.value
    //console.log(this.myControl.value)
    const fd = new FormData()
    const emploitemps = this.emploiForm.value
    fd.append('file', this.selectFile)
    fd.append('emploitemps', JSON.stringify(emploitemps))
    if (this.emploiForm.valid == true){
      this.emploidutempsService.SaveServiceEmploiTemps(fd).subscribe(data => {
        this.emploiForm.reset();
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


   semestres: Semestre[] = [
    {value:'Semestre1', 
    viewValue: 'Semestre1'},
    {value:'Semestre2', 
    viewValue: 'Semestre2'}
  ];

}
