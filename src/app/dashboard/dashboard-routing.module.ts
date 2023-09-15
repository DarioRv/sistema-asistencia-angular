import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'courses',
        component: CoursesPageComponent
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
