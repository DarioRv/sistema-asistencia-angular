import { Component, Input, OnInit } from '@angular/core';
import { ClassScheduleService } from '../../services/class-schedule.service';
import { ClassScheduleGet } from '../../interfaces/class-schedule-get.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'class-schedule-list',
  templateUrl: './class-schedule-list.component.html',
  styles: [],
})
export class ClassScheduleListComponent implements OnInit {
  @Input({ required: true })
  courseId!: string;
  schedules: ClassScheduleGet[] = [];

  constructor(
    private scheduleService: ClassScheduleService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules(): void {
    this.scheduleService.getClassSchedulesByCourseId(this.courseId).subscribe({
      next: (schedules) => {
        this.schedules = schedules;
      },
      error: () => {
        this.snackbarService.showSnackbar('Los horarios no están disponibles');
      },
    });
  }

  deleteSchedule(scheduleId: string): void {
    this.scheduleService.deleteClassSchedule(scheduleId).subscribe({
      next: (hasDeleted) => {
        if (hasDeleted) {
          this.getSchedules();
          this.snackbarService.showSnackbar('Horario eliminado correctamente');
        }

        this.snackbarService.showSnackbar('No se pudo eliminar el horario');
      },
      error: () => {
        this.snackbarService.showSnackbar('No se pudo eliminar el horario');
      },
    });
  }
}
