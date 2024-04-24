import { AfterViewInit, Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { RequestStatus } from 'src/app/shared/types/request-status.type';
import { ClassScheduleService } from '../../services/class-schedule.service';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styles: [],
})
export class ScheduleFormComponent implements AfterViewInit {
  @Input({ required: true })
  courseId!: string;

  scheduleForm: FormGroup = this.fb.group({
    cursoId: ['', Validators.required],
    entrada: [0, Validators.required],
    salida: [0, Validators.required],
    dia: ['', Validators.required],
  });

  availableDays = [
    { label: 'Lunes', value: 'LUNES' },
    { label: 'Martes', value: 'MARTES' },
    { label: 'Miércoles', value: 'MIERCOLES' },
    { label: 'Jueves', value: 'JUEVES' },
    { label: 'Viernes', value: 'VIERNES' },
    { label: 'Sábado', value: 'SABADO' },
    { label: 'Domingo', value: 'DOMINGO' },
  ];

  status: RequestStatus = 'pending';

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private scheduleService: ClassScheduleService
  ) {}

  get entrada(): FormControl {
    return this.scheduleForm.get('entrada') as FormControl;
  }

  get salida(): FormControl {
    return this.scheduleForm.get('salida') as FormControl;
  }

  get dia(): FormControl {
    return this.scheduleForm.get('dia') as FormControl;
  }

  ngAfterViewInit(): void {
    this.scheduleForm.patchValue({ cursoId: this.courseId });
  }

  onSubmit(): void {
    console.log(this.scheduleForm.value);
    if (this.scheduleForm.invalid) {
      this.snackbarService.showSnackbar('Introduzca un horario válido');
      return;
    }

    this.scheduleService.addClassSchedule(this.scheduleForm.value).subscribe({
      next: () => {
        this.snackbarService.showSnackbar('Horario agregado correctamente');
        this.scheduleForm.reset();
        this.scheduleForm.clearValidators();
      },
      error: () => {
        this.snackbarService.showSnackbar('Error al agregar el horario');
      },
    });
  }
}
