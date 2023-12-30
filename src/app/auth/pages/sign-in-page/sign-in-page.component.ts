import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in-page.component.html',
  styles: [
    `
    .sign-in {
      min-height: calc(100vh - 64px);
    }
    `
  ]
})
export class SignInPageComponent {
  signInForm: FormGroup;
  hide = true;
  isSubmitting: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private snackbarService: SnackbarService) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get Email() {
    return this.signInForm.get('email');
  }

  get Password() {
    return this.signInForm.get('password');
  }

  /**
   * Method to login and redirect to the dashboard if the user is authenticated successfully
   * or show a snackbar if the user could not be authenticated
   */
  login(): void {
    if (this.signInForm.valid) {
      this.isSubmitting = true;
      this.authService.authenticateUser(this.signInForm.value).subscribe((user) => {
        if (user) {
          this.snackbarService.showSnackbar('Inicio de sesión correcto');
          this.router.navigate(['/dashboard']);
        }
        else {
          this.snackbarService.showSnackbar('Error al iniciar sesión');
        }
        this.isSubmitting = false;
      });
    }
    else {
      this.snackbarService.showSnackbar('Por favor, rellene los campos')
      this.signInForm.markAllAsTouched();
    }
  }

}
