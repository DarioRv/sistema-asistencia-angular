import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { RegisterAttendancePageComponent } from './pages/register-attendance-page/register-attendance-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterAttendancePageComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AttendanceModule { }
