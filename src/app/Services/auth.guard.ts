import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable(
  {
  providedIn: 'root'
  
})


export class AuthGuard implements CanActivate {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  user:any;

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)

      if (!this.user) {
        // Si pas d'utilisateur connecté : redirection vers la page de login
        console.log('Vous n\'êtes pas connectés');
        this.router.navigate(['/login'], { queryParams: { redirectUrl: state.url }});
      }
      return true;
    }
}
