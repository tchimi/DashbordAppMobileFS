import { Component, OnInit } from '@angular/core';
import { UtilisateurServiceService } from '../../Services/utilisateur-service.service';
import {FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  listuser: any;
  list1=['Admin','SimpleUser'];
  list2:any;

  constructor(private usersService: UtilisateurServiceService, private toast: ToastrService) { }
  username=new FormControl('');
  select1=new FormControl('');

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){
    this.usersService.getdata().subscribe(data=>{
      this.listuser=data
    })
  }

  getUserbyRole() {
    this.list1=['Admin','SimpleUser'];
    this.usersService.getDataRoleUser(this.username.value.username).subscribe(data=>{
      this.list2 =data;
      for (var i = 0; i < this.list2.length; i++) {

        for (var j = 0; j < this.list1.length; j++) {
          if (this.list2[i] === this.list1[j]) {
            var del = this.list1.indexOf(this.list1[j]);
            this.list1.splice(del, 1);
          }
        }

      }
    })
  }


  oneToRigh() {
    if (this.select1.value !== "") {
      console.log(this.select1.value)

      this.list2.push(this.select1.value);
      var del = this.list1.indexOf(this.select1.value);
      this.list1.splice(del, 1);
      this.select1.reset();
    }
  }


  oneToLeft() {
    console.log(this.select1)
    if (this.select1.value !== "") {

      this.list1.push(this.select1.value);
      var del = this.list2.indexOf(this.select1.value);
      this.list2.splice(del, 1);
      this.select1.reset();
    }
  }

  addRoleUser() {
    this.usersService.saveRoleUser(this.username.value.username,this.list2).subscribe(data=>{
      this.toast.success('Operation effectuée!', 'Succès');
    },error => {
      this.toast.error("Echec d'opération","Error");
    })
  }
  }


