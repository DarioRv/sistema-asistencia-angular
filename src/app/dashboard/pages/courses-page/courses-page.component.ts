import { Component } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styles: [
  ]
})
export class CoursesPageComponent {
  public courses: Course[] = [
    {
      title: "Introducción a la Programación",
      universityProgram: "Ingeniería Informática",
      description: "Un curso introductorio que cubre los fundamentos de la programación.",
      students: 120
    },
    {
      title: "Diseño de Interfaz de Usuario",
      universityProgram: "Diseño Gráfico",
      description: "Aprende a crear interfaces de usuario efectivas y atractivas.",
      students: 90
    },
    {
      title: "Inteligencia Artificial Avanzada",
      universityProgram: "Ciencia de Datos",
      description: "Explora algoritmos de inteligencia artificial avanzados y sus aplicaciones.",
      students: 60
    },
    {
      title: "Gestión de Proyectos de Software",
      universityProgram: "Gestión de Proyectos",
      description: "Adquiere habilidades para liderar proyectos de desarrollo de software.",
      students: 75
    },
    {
      title: "Marketing Digital Estratégico",
      universityProgram: "Marketing",
      description: "Aprende a utilizar estrategias digitales para promover productos y servicios.",
      students: 110
    }
  ];
}
