import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActualiteServiceService } from '../../../Services/actualite-service.service';


@Component({
  selector: 'app-addactualite',
  templateUrl: './addactualite.component.html',
  styleUrls: ['./addactualite.component.css']
})
export class AddactualiteComponent implements OnInit {

  constructor(private actualiteService : ActualiteServiceService, private http: HttpClient, private toast: ToastrService) { }
  myControl = new FormControl();
  selectFile :File=null;

  ActualiteForm = new FormGroup({
    //etapeCODEETAPE: new FormControl(''),
    message: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
   

  })


  ngOnInit(): void {
  }

  onselect(event){
    this.selectFile = <File>event.target.files[0]
    console.log(this.selectFile)
  }

  onUpload(){
    //this.emploiForm.value.etapeCODEETAPE=this.myControl.value
    //console.log(this.myControl.value)
    const fd = new FormData()
    const actualite = this.ActualiteForm.value
    fd.append('file', this.selectFile)
    fd.append('actualite', JSON.stringify(actualite))
    if (this.ActualiteForm.valid == true){
      this.actualiteService.saveServiceActualite(fd).subscribe(data => {
        this.ActualiteForm.reset();
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
