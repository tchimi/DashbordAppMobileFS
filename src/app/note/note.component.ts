import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NoteServiceService } from '../Services/note-service.service';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



interface Semestre {
  value: string;
  viewValue: string;
}

interface Niveau {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor( private noteService: NoteServiceService, private http: HttpClient,
     public dialogRef: MatDialogRef <NoteComponent>, private toast: ToastrService) { }

 selectFile :File=null;
 lisetape:string[];
 myControl = new FormControl();
 listeAnneeacad:string
 listeSemestre:string
 filteredOptions: Observable<string[]>;

    noteForm = new FormGroup({
    etapeCODEETAPE: new FormControl(''),
    semestreCODESEMESTRE: new FormControl('', Validators.required),
    anneeacadCODEANNEE: new FormControl('', Validators.required),  
  })

 


  ngOnInit(): void {
    this.getlistEtape();
    this.getlisteAnneeacad();
    this.getlisteSemestre();
   
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.lisetape.filter(etapeCODEETAPE => etapeCODEETAPE.toLowerCase().includes(filterValue));
  }

  onselect(event){
    this.selectFile = <File>event.target.files[0]
    console.log(this.selectFile)
  }



  onUpload(){
    this.noteForm.value.etapeCODEETAPE=this.myControl.value
    console.log(this.myControl.value)
    console.log(this.noteForm.value)
    const fd=new FormData()
    const note=this.noteForm.value
    fd.append('file', this.selectFile)
    fd.append('note', JSON.stringify(note))
    if (this.noteForm.valid == true && this.myControl.value!=null){
      this.noteService.saveServiceNote(fd ).subscribe(data => {
        this.noteForm.reset();
        this.toast.success('Operation effectuée!', 'Succès');
    }, error => {
      this.toast.error('Echec de l' + 'operation:' + ' ' + error , 'Erreur' );
    });
   }else{
    this.toast.info('Veuillez remplir le champ Svp !', 'Information');
      }
    //this.noteService.saveServiceNote(fd).subscribe((response)=>{
    //console.log(response)
   
  }

  CloseDialog(){
    this.dialogRef.close();
    //this.toast.success('Operation effectuée!', 'Succès');
  }


  getlistEtape(){
    this.noteService.getlistEtape().subscribe(data=>{
      this.lisetape=data;
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
     
      
    })
  }

 getlisteAnneeacad(){
   this.noteService.getlisteAnneeacad().subscribe(data=>{
     this.listeAnneeacad = data
   })
  }

  getlisteSemestre(){
    this.noteService.getlisteSemestre().subscribe(data=>{
      this.listeSemestre = data
    })
   }
  semestres: Semestre[] = [
    {value:'Semestre1', 
    viewValue: 'Semestre1'},
    {value:'Semestre2', 
    viewValue: 'Semestre2'}
  ];


  niveaux: Niveau[] = [
    {value:'Niveau1', 
    viewValue: '1'},
    {value:'Niveau2', 
    viewValue: '2'},
    {value:'Niveau3', 
    viewValue: '3'},
    {value:'Niveau4', 
    viewValue: '4'},
    {value:'Niveau5', 
    viewValue: '5'},

  ];

}
