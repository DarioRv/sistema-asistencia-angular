import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up-page.component.html',
  styles: [
  ]
})
export class SignUpPageComponent {
  signUpForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  get Email() {
    return this.signUpForm.get('email');
  }

  get Password() {
    return this.signUpForm.get('password');
  }

  get Surname() {
    return this.signUpForm.get('surname');
  }

  get Name() {
    return this.signUpForm.get('name');
  }

  register():void {
    // TODO verificar datos de registro
    if (this.signUpForm.valid) {
      console.log('Form valido', this.signUpForm.value);
      // TODO Llamar al método para registrar al usuario
    }
    else {
      console.log('Formulario inválido. Revisa los campos.');
      this.signUpForm.markAllAsTouched();
    }
  }

}
