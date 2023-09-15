import { Component } from '@angular/core';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'course-student-list',
  templateUrl: './student-list.component.html',
  styles: [
  ]
})
export class StudentListComponent {
  public students: Student[] = [
    {
      "lu": "APU00001",
      "apellido": "García",
      "nombre": "Juan"
    },
    {
      "lu": "APU00002",
      "apellido": "López",
      "nombre": "María"
    },
    {
      "lu": "APU00003",
      "apellido": "Martínez",
      "nombre": "Pedro"
    },
    {
      "lu": "APU00004",
      "apellido": "Fernández",
      "nombre": "Laura"
    },
    {
      "lu": "APU00005",
      "apellido": "Rodríguez",
      "nombre": "Carlos"
    },
    {
      "lu": "APU00006",
      "apellido": "Torres",
      "nombre": "Sofía"
    },
    {
      "lu": "APU00007",
      "apellido": "Pérez",
      "nombre": "Luis"
    },
    {
      "lu": "APU00008",
      "apellido": "González",
      "nombre": "Ana"
    },
    {
      "lu": "APU00009",
      "apellido": "Ramírez",
      "nombre": "Maria"
    },
    {
      "lu": "APU00010",
      "apellido": "Díaz",
      "nombre": "José"
    },
    {
      "lu": "APU00011",
      "apellido": "Hernández",
      "nombre": "Andrea"
    },
    {
      "lu": "APU00012",
      "apellido": "Vargas",
      "nombre": "Alejandro"
    },
    {
      "lu": "APU00013",
      "apellido": "Rojas",
      "nombre": "Sara"
    },
    {
      "lu": "APU00014",
      "apellido": "Gomez",
      "nombre": "David"
    },
    {
      "lu": "APU00015",
      "apellido": "Mendoza",
      "nombre": "Laura"
    },
    {
      "lu": "APU00016",
      "apellido": "Ortega",
      "nombre": "Daniel"
    },
    {
      "lu": "APU00017",
      "apellido": "Silva",
      "nombre": "Valentina"
    },
    {
      "lu": "APU00018",
      "apellido": "Juarez",
      "nombre": "Diego"
    },
    {
      "lu": "APU00019",
      "apellido": "Guerrero",
      "nombre": "Camila"
    },
    {
      "lu": "APU00020",
      "apellido": "Pereira",
      "nombre": "Pablo"
    },
    {
      "lu": "APU00021",
      "apellido": "Martins",
      "nombre": "Mariana"
    },
    {
      "lu": "APU00022",
      "apellido": "Sánchez",
      "nombre": "Julia"
    },
    {
      "lu": "APU00023",
      "apellido": "Paz",
      "nombre": "Emilio"
    },
    {
      "lu": "APU00024",
      "apellido": "Moreno",
      "nombre": "Isabella"
    },
    {
      "lu": "APU00025",
      "apellido": "Benitez",
      "nombre": "Manuel"
    },
    {
      "lu": "APU00026",
      "apellido": "Lima",
      "nombre": "Sofía"
    },
    {
      "lu": "APU00027",
      "apellido": "Ferreira",
      "nombre": "Lucas"
    },
    {
      "lu": "APU00028",
      "apellido": "Fuentes",
      "nombre": "Valeria"
    },
    {
      "lu": "APU00029",
      "apellido": "Pacheco",
      "nombre": "Antonio"
    },
    {
      "lu": "APU00030",
      "apellido": "Soto",
      "nombre": "Carolina"
    }
  ];
}
