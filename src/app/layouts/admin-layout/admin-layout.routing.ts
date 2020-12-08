
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NoteComponent } from '../../note/note.component';
import { ListeNoteComponent } from '../../liste-note/liste-note.component';
import { EmploiDuTempsComponent } from '../../emploi-du-temps/emploi-du-temps.component';
import { ListeprogramexamComponent } from '../../programexam/addprogramexam/tabprogram/listeprogramexam/listeprogramexam.component';
import { AddactualiteComponent } from '../../file-actualite/addactualite/addactualite/addactualite.component';
import { AdduserComponent } from '../../utilisateur/add/adduser/adduser.component';
import { LoginComponent } from '../../login/login/login.component';
import { RolesComponent } from '../../roles/roles/roles.component';









export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'user-profile',        component: UserProfileComponent },
    { path: 'table-list',          component: TableListComponent },
    { path: 'icons',               component: IconsComponent },
    { path: 'maps',                component: MapsComponent },
    { path: 'notifications',       component: NotificationsComponent },
    { path: 'upgrade',             component: UpgradeComponent },
    { path: 'note',                component: NoteComponent },
    { path: 'liste-note',          component: ListeNoteComponent },
    { path: 'emploi-du-temps',     component: EmploiDuTempsComponent},
    { path: 'liste-programexam',   component: ListeprogramexamComponent},
    { path: 'addactualite',        component: AddactualiteComponent},
    { path: 'utilisateur',         component: AdduserComponent},
    { path: 'login',               component: LoginComponent},
    {path:  'role',                component: RolesComponent},
    
];
