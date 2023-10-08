import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { FloatingMenuOption } from '../../interfaces/floating-menu-option.interface';

@Component({
  selector: 'dashboard-course-card',
  templateUrl: './course-card.component.html',
  styles: [
  ]
})
export class CourseCardComponent {

  @Input()
  // TODO change to optional and create an alert if it's undefined
  public course!: Course;

  public courseOptions: FloatingMenuOption[] = [
    {icon: 'edit', label: 'Editar', url: ''},
    {icon: 'delete', label: 'Eliminar', url: ''},
  ]
}
