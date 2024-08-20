import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { PasswordUpdatePageComponent } from './pages/password-update-page/password-update-page.component';
import { UpdateUserDataPageComponent } from './pages/update-user-data-page/update-user-data-page.component';

const routes: Routes = [
  { path: '', component: AccountPageComponent },
  { path: 'update-password', component: PasswordUpdatePageComponent },
  { path: 'edit-my-profile', component: UpdateUserDataPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
