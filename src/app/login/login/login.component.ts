import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "nom d'utilisateur ou mot de passe incorrect";
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService,
    private toast: ToastrService

  ) { }

  userLoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.userLoginForm.valid==true){
      this.authService.authenticationService(this.userLoginForm.value.username, this.userLoginForm.value.password).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        console.log(result);
        // On récupère l'url de redirection
    const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/dashboard';
        this.router.navigate(['redirectUrl']);
      }, () => {

        this.invalidLogin = true;
        this.loginSuccess = false;
      });
    }else{
      this.toast.info('Veuillez bien remplir les champ Svp !', 'Information');
    }

  }

}
