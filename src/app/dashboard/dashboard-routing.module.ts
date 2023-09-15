import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'courses',
        component: CoursesPageComponent,
      },
      {
        path: 'course/:id',
        component: CourseDetailsPageComponent
      },
      {
        path: 'account',
        component: AccountPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
