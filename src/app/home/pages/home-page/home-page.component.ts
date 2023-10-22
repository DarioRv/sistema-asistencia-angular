import { Component } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css'
  ]
})
export class HomePageComponent {
  benefitsItems = [
    { icon: 'check_circle', label: 'Mejora la asistencia' },
    { icon: 'check_circle', label: 'Todo esta organizado' },
    { icon: 'check_circle', label: 'Ahorra tiempo' },
    { icon: 'check_circle', label: 'Es gratis y no necesitas TC' },
    { icon: 'check_circle', label: 'Sistema intuitivo' },
    { icon: 'check_circle', label: 'Ténes informes en formato CSV' },
    { icon: 'check_circle', label: 'Es segura y escalable' },
  ];
  stepCardItems: Step[] = [
    { id: 1, title: 'Creá tu curso', description: 'Creá tu curso y cargá la lista de estudiantes.' },
    { id: 2, title: 'Cargá la lista de estudiantes', description: 'Podés cargar la lista de estudiantes de manera manual o importarla desde un archivo CSV.' },
    { id: 3, title: 'Generá el link de asistencia', description: 'Una vez que tengas la lista de estudiantes cargada, generá el link para que tus alumnos registren la asistencia.' },
    { id: 4, title: 'Pedí el informe', description: 'Una vez que finalice la clase, podés pedir el informe de asistencia en formato CSV.' }
  ];
}
