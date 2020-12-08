import { Component, OnInit } from '@angular/core';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    roles: Role[] = [
      {value:'Super-Admin', 
      viewValue: 'SuperAdmin'},
      {value:'Admin', 
      viewValue: 'Admin'}
    ];

}
