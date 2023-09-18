import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styles: [
  ]
})
export class ScheduleFormComponent {
  form!: FormGroup;
  formEditState: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      hour1: [[], [Validators.min(0), Validators.max(23)]],
      minute1: [],
      hour2: [[], []],
      minute2: [],
    });
  }

  ngOnInit(): void {
    this.disableInputs();

    this.form.get('hour1')?.setValue('10');
    this.form.get('minute1')?.setValue('00');
    this.form.get('hour2')?.setValue('12');
    this.form.get('minute2')?.setValue('30');
  }
  toggleEdit(): void {
    this.formEditState = !this.formEditState;
    if (this.formEditState) {
      this.eneableInputs();
    }
    else {
      this.disableInputs();
    }
  }

  eneableInputs(): void {
    this.form.get('hour1')?.enable();
    this.form.get('minute1')?.enable();
    this.form.get('hour2')?.enable();
    this.form.get('minute2')?.enable();
  }

  disableInputs(): void {
    this.form.get('hour1')?.disable();
    this.form.get('minute1')?.disable();
    this.form.get('hour2')?.disable();
    this.form.get('minute2')?.disable();
  }

  hasErrors(): boolean {
    return this.form.invalid ? true : false;
  }
}
