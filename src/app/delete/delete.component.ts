import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NoteServiceService } from '../Services/note-service.service';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})


export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <DeleteComponent>, private toast: ToastrService, private http: HttpClient,
    private noteService: NoteServiceService) { }

    noteForm = new FormGroup({
      idnote: new FormControl(''),
      etapeCODEETAPE: new FormControl(''),
      semestreCODESEMESTRE: new FormControl(''),
      anneeacadCODEANNEE: new FormControl(''),
      namefile: new FormControl(''),
      userUsername: new FormControl(''),  
    })

  ngOnInit(): void {
    this.noteForm.setValue(this.noteService.setDataDialog());
    console.log(this.noteForm.value)

  }


  CloseDialog(){
    this.dialogRef.close();
    //this.toast.success('Operation effectuée!', 'Succès');
  }


  onDeleteNote() {

    this.noteService.deleteNote(this.noteForm.value).subscribe(data => {
      this.noteForm.reset();
      this.toast.success('Operation effectuée!', 'Succès');
      this.dialogRef.close();
    }, error => {
      this.toast.warning("Echec de l'oparation", 'Warning');
    });
  }

}
