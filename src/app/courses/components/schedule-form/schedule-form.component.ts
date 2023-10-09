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

  /**
   * Method to toggle the edit state of the form
   */
  toggleEdit(): void {
    this.formEditState = !this.formEditState;
    if (this.formEditState) {
      this.eneableInputs();
    }
    else {
      this.disableInputs();
    }
  }

  /**
   * Method to enable the form inputs
   */
  eneableInputs(): void {
    this.form.enable();
  }

  /**
   * Method to disable the form inputs
   */
  disableInputs(): void {
    this.form.disable();
  }

  /**
   * Method to check if the form has errors
   * @returns true if the form has errors, false otherwise
   */
  hasErrors(): boolean {
    return this.form.invalid ? true : false;
  }
}
