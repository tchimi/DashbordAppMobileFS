
import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ProgramexamServiceService } from '../../../Services/programexam-service.service';


@Component({
  selector: 'app-addprogramexam',
  templateUrl: './addprogramexam.component.html',
  styleUrls: ['./addprogramexam.component.css']
})
export class AddprogramexamComponent implements OnInit {

  constructor(private programexamService: ProgramexamServiceService, public dialogRef: MatDialogRef <AddprogramexamComponent>,
    private http: HttpClient, private toast: ToastrService) { }
  
    listeAnneeacad:string;
    listeSemestre:string;
    listeNiveau:string;
    selectFile :File=null;
    myControl = new FormControl();

    ProgramForm = new FormGroup({
      //etapeCODEETAPE: new FormControl(''),
      semestreCODESEMESTRE: new FormControl('', Validators.required),
      niveauCODENIVEAU: new FormControl('', Validators.required),
      anneeacadCODEANNEE: new FormControl('', Validators.required), 

    })


  ngOnInit(): void {
    this.getlisteAnneeacad()
    this.getlisteSemestre()
    this.getlisteNiveau()
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
    this.programexamService.getlisteAnneeacad().subscribe(data=>{
      this.listeAnneeacad = data
    })
   }

   getlisteSemestre(){
    this.programexamService.getlisteSemestre().subscribe(data=>{
      this.listeSemestre = data
    })
   }

   getlisteNiveau(){
    this.programexamService.getlisteNiveau().subscribe(data=>{
      this.listeNiveau = data
    })
   }

   onUpload(){
    //this.emploiForm.value.etapeCODEETAPE=this.myControl.value
    //console.log(this.myControl.value)
    const fd = new FormData()
    const programexam = this.ProgramForm.value
    fd.append('file', this.selectFile)
    fd.append('programexam', JSON.stringify(programexam))
    if (this.ProgramForm.valid == true){
      this.programexamService.saveServiceProgramexam(fd).subscribe(data => {
        this.ProgramForm.reset();
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
