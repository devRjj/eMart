import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private toastr: ToastrService
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
}
