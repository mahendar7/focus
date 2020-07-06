import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  userDetails: any;

  constructor(private authService: AuthService,
    private spinner: NgxSpinnerService, private router: Router) { }

  async ngAfterViewInit() { }


  // Open Popup to Login with Google Account
  public googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        return this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
      });
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
  }

}
