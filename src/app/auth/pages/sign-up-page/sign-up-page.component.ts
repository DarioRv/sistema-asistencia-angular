import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up-page.component.html',
  styles: [
    `
    .sign-up {
      min-height: calc(100vh - 64px);
    }
    `
  ]
})
export class SignUpPageComponent {
  signUpForm: FormGroup;
  hide = true;
  isSubmitting: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private snackbarService: SnackbarService) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get lastname() {
    return this.signUpForm.get('lastname');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get formData(): User {
    const user = this.signUpForm.value as User;
    return user;
  }

  /**
   * Method to register the user and redirect to the dashboard if the user is registered successfully
   */
  register():void {
    if (this.signUpForm.valid) {
      this.isSubmitting = true;
      this.authService.registerUser(this.formData).subscribe((user) => {
        if (user) {
          this.snackbarService.showSnackbar('Usuario registrado correctamente');
          this.authService.login(user);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.snackbarService.showSnackbar('Error al registrar el usuario, asegúrese de que esta conectado a internet');
        }
        this.isSubmitting = false;
      });
    }
    else {
      this.snackbarService.showSnackbar('Por favor, rellene los campos');
      this.signUpForm.markAllAsTouched();
    }
  }
}
