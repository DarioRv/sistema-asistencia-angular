import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { PasswordUpdateFormComponent } from './components/password-update-form/password-update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordUpdatePageComponent } from './pages/password-update-page/password-update-page.component';
import { ConfirmDeleteAccountDialogComponent } from './components/confirm-delete-account-dialog/confirm-delete-account-dialog.component';

@NgModule({
  declarations: [
    AccountPageComponent,
    PasswordUpdateFormComponent,
    PasswordUpdatePageComponent,
    ConfirmDeleteAccountDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class UserModule { }
