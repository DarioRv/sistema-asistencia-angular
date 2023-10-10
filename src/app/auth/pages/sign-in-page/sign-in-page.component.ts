import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in-page.component.html',
  styles: [
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
          this.router.navigate(['/dashboard']);
          this.authService.saveSession(user);
          this.showSnackBar('Inicio de sesión correcto');
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
