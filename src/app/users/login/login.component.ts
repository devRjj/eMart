import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { SignupComponent } from '../signup/signup.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  dialog: any;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private toastr: ToastrService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loginFormControls();
  }

  loginFormControls() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (
      this.loginForm.get('username')?.value === 'admin' &&
      this.loginForm.get('password')?.value === 'admin'
    ) {
      this.toastr.success('Login Successful', 'eMart Shopping .inc');
      this.registrationService.setRegistration(true);
      this.router.navigate(['/dashboard']);
      this.loginForm.reset();
    } else {
      this.toastr.error(
        'Login Unsuccessful. Please, check your login credentials.',
        'eMart Shopping .inc'
      );
      this.registrationService.setRegistration(false);
    }
  }

  openDialog(): void {
    // const dialogRef = 
    this.matDialog.open(SignupComponent, {
      width: '600px'
    });

    // dialogRef.afterClosed().subscribe((result:any) => {
    //   console.log('The dialog was closed');
    // });
  }

}
