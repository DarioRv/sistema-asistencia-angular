import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in-page.component.html',
  styles: [
    `
    .sign-in {
      height: calc(100vh - 64px);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sign-up-redirect {
      border-radius: 4rem 1.5rem 1.5rem 4rem;
    }

    .form button[type="submit"] {
      color: #fff;
      border-radius: 0.5rem;
    }

    .sign-up-redirect button {
      border: 1px solid #fff;
      color: #fff;
      padding: .5rem 3rem;
      border-radius: 0.5rem;
      background-color: transparent;
    }

    .sign-up-redirect button:hover {
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
    `
  ]
})
export class SignInPageComponent {
  signInForm: FormGroup;
  hide = true;
  isSubmitting: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private snackbar: MatSnackBar) {
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
          this.showSnackBar('Inicio de sesión correcto');
          this.router.navigate(['/dashboard']);
        }
        else {
          this.showSnackBar('Error al iniciar sesión');
        }
        this.isSubmitting = false;
      });
    }
    else {
      this.showSnackBar('Por favor, rellene los campos')
      this.signInForm.markAllAsTouched();
    }
  }

  /**
   * Method to show a snackbar
   * @param message The message to show in the snackbar
   */
  showSnackBar(message: string): void {
    this.snackbar.open(message, 'Ok!', {
      duration: 5000
    });
  }
}
