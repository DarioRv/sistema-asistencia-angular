import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAttendancePageComponent } from './pages/register-attendance-page/register-attendance-page.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterAttendancePageComponent
  },
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
