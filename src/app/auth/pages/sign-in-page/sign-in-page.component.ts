import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html',
  styles: [
  ]
})
export class SignInPageComponent {
  signInForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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


  login():void {
    // TODO verificar datos de acceso
    if (this.signInForm.valid) {
      console.log('Form valido', this.signInForm.value);
      this.router.navigate(['/dashboard']);
    }
    else {
      console.log('Formulario inválido. Revisa los campos.');
      this.signInForm.markAllAsTouched();
    }
  }

}
