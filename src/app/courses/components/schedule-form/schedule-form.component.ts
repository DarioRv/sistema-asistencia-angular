import { AfterViewInit, Component, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ClassScheduleService } from '../../services/class-schedule.service';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'schedule-form',
    templateUrl: './schedule-form.component.html',
    styles: [],
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatSelect, MatOption, MatButton, MatIcon, MatProgressSpinner]
})
export class ScheduleFormComponent implements AfterViewInit {
  readonly courseId = input.required<string>();

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

  isLoading: boolean = false;

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
    this.scheduleForm.patchValue({ cursoId: this.courseId() });
  }

  onSubmit(): void {
    this.isLoading = true;
    if (this.scheduleForm.invalid) {
      this.snackbarService.showSnackbar('Introduzca un horario válido');
      this.isLoading = false;
      return;
    }

    this.scheduleService.addClassSchedule(this.scheduleForm.value).subscribe({
      next: () => {
        this.snackbarService.showSnackbar('Horario agregado correctamente');
        this.scheduleForm.reset();
        this.scheduleForm.patchValue({ cursoId: this.courseId() });
        this.scheduleForm.markAsPristine();
        this.scheduleForm.markAsUntouched();
        this.isLoading = false;
      },
      error: (error) => {
        this.snackbarService.showSnackbar(error.error.message);
        this.isLoading = false;
      },
    });
  }
}
