import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/auth.service';
import { User } from '../../../shared/interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in-page.component.html',
  styles: [
  ]
})
export class SignInPageComponent {
  signInForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private cookieService: CookieService) {
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


  login(): void {
    // TODO verificar datos de acceso
    if (this.signInForm.valid) {
      console.log('Form valido', this.signInForm.value);
      this.authUser() || console.log('Usuario no encontrado');
    }
    else {
      console.log('Formulario inválido. Revisa los campos.');
      this.signInForm.markAllAsTouched();
    }
  }

  authUser(): boolean {
    let success: boolean = false;
    this.userService.authUser(this.signInForm.value).subscribe((user: User) => {
      if (user) {
        this.router.navigate(['/dashboard']);
        this.cookieService.set('user', JSON.stringify(user));
        success = true;
      }
    });
    return success;
  }
}
