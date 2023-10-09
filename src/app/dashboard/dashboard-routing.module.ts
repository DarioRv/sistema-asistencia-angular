import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'start',
        component: HomePageComponent
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses.module').then( (m) => m.CoursesModule )
      },
      {
        path: 'account',
        component: AccountPageComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'start'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
