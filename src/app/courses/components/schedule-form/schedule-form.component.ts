import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassSchedule } from '../../interfaces/class-schedule.interface';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styles: [
  ]
})
export class ScheduleFormComponent implements OnInit {
  scheduleForm: FormGroup = new FormGroup({
    entryTime: new FormControl('', [Validators.required]),
    departureTime: new FormControl('', [Validators.required]),
  });
  isDisabled: boolean = true;

  @Input()
  public classSchedule?: ClassSchedule;

  @Output()
  public onEditClassSchedule: EventEmitter<ClassSchedule> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.setDisabledState();
    this.setDefaultScheduleClass();
  }

  /**
   * Get the entryTime value of the form
   */
  get entryTime() {
    return this.scheduleForm.get('entryTime');
  }

  /**
   * Get the departureTime value of the form
   */
  get departureTime() {
    return this.scheduleForm.get('departureTime');
  }

  /**
   * Set the default values of the form
   */
  setDefaultScheduleClass(): void {
    if (!this.classSchedule) return;
    this.entryTime?.setValue(this.classSchedule.entryTime);
    this.departureTime?.setValue(this.classSchedule.departureTime);
  }

  /**
   * Set the disabled state of the form
   */
  setDisabledState(): void {
    this.scheduleForm.disable();
    this.isDisabled = true;
  }

  /**
   * Toggle the disabled state of the form
   */
  toggleMode(): void {
    this.scheduleForm.enabled ? this.scheduleForm.disable() : this.scheduleForm.enable();
    this.isDisabled = !this.isDisabled;
  }

  /**
   * Toggle the state of the form
   */
  onEdit(): void {
    this.toggleMode();
  }

  /**
   * Method to handle the submit event of the form
   */
  onSubmit(): void {
    if (this.scheduleForm.invalid) return;
    this.emitClassSchedule();
    this.setDisabledState();
  }

  /**
   * Emit the class schedule to the parent component
   */
  emitClassSchedule(): void {
    this.onEditClassSchedule.emit(this.scheduleForm.value);
  }
}
