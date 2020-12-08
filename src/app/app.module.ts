import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialFileInputModule } from 'ngx-mat-file-input';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListeNoteComponent } from './liste-note/liste-note.component';
import { EmploiDuTempsComponent } from './emploi-du-temps/emploi-du-temps.component';
import { AddEmploiDuTempsComponent } from './add-emploi-du-temps/add-emploi-du-temps.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpInterceptorService } from './Services/http-interceptor.service';



import {
  AgmCoreModule
} from '@agm/core';
import { DeleteComponent } from './delete/delete.component';
import { EmploiDuTempsDeleteComponent } from './emploi-du-temps-delete/emploi-du-temps-delete.component';
import { ListeprogramexamComponent } from './programexam/addprogramexam/tabprogram/listeprogramexam/listeprogramexam.component';
import { DeleteprogramexamComponent } from './programexam/addprogramexam/deleteprogramexam/deleteprogramexam/deleteprogramexam.component';
import { AddactualiteComponent } from './file-actualite/addactualite/addactualite/addactualite.component';
import { AdduserComponent } from './utilisateur/add/adduser/adduser.component';
import { AddprogramexamComponent } from './programexam/addprogramexam/addprogramexam/addprogramexam.component';
import { LoginComponent } from './login/login/login.component';
import { RolesComponent } from './roles/roles/roles.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    ToastrModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListeNoteComponent,
    EmploiDuTempsComponent,
    AddEmploiDuTempsComponent,
    DeleteComponent,
    EmploiDuTempsDeleteComponent,
    AddprogramexamComponent,
    ListeprogramexamComponent,
    DeleteprogramexamComponent,
    AddactualiteComponent,
    AdduserComponent,
    LoginComponent,
    RolesComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


