import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { RegisterAttendancePageComponent } from './pages/register-attendance-page/register-attendance-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AttendanceHistoryPageComponent } from './pages/attendance-history-page/attendance-history-page.component';
import { CodeIntroductionPageComponent } from './pages/code-introduction-page/code-introduction-page.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';


@NgModule({
    imports: [
    CommonModule,
    AttendanceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RegisterAttendancePageComponent,
    LayoutPageComponent,
    AttendanceHistoryPageComponent,
    CodeIntroductionPageComponent,
    AttendanceFormComponent
]
})
export class AttendanceModule { }
