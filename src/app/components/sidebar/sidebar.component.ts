import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Utilisateur',  icon: 'dashboard', class: '' },
    { path: '/utilisateur', title: 'Utilisateur',  icon: 'dashboard', class: '' },
//{ path: '/user-profile', title: 'Profile Utilisateur',  icon:'person', class: '' },
//{ path: '/table-list', title: 'NOTE List',  icon:'content_paste', class: '' },
//{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
//{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
//{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
//{path:  '/note', title: 'Note', icon: 'crop_din', class: ''},
    {path:  '/liste-note', title: 'Note', icon: 'crop_din', class: ''},
    {path:  '/emploi-du-temps', title: 'Emploi du temps', icon: 'alarm_on', class: ''},
    {path:  '/liste-programexam', title: 'Programme des Examein', icon: 'alarm_on', class: ''},
    {path:  '/addactualite', title: 'file actualite', icon: 'alarm_on', class: ''},
    {path:  '/role', title: 'Role utilisateur', icon: 'unarchive', class: ''},

    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
