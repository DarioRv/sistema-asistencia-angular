import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { CourseFormPageComponent } from './pages/course-form-page/course-form-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: CoursesPageComponent,
    data: { title: 'Materias' }
  },
  {
    path: 'view/:id',
    component: CourseDetailsPageComponent,
    data: { title: 'Detalles de la materia' }
  },
  {
    path: 'new-course',
    component: CourseFormPageComponent,
    data: { title: 'Nueva materia' }
  },
  {
    path: 'edit/:id',
    component: CourseFormPageComponent,
    data: { title: 'Editar materia' }
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
