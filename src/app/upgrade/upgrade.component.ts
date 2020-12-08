import { Component, OnInit, NgModule } from '@angular/core';
import {  MaterialFileInputModule  } from 'ngx-mat-file-input';
import { from } from 'rxjs';


interface Role {
  value: string;
  viewValue: string;
}

@NgModule({
  imports: [
    // the module for this lib
    MaterialFileInputModule
  ]
})


@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['/upgrade.component.css']
})
export class UpgradeComponent  implements OnInit  {

  hide = true;

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

export class FormFieldPrefixSuffixExample {

  hide = true;
}
