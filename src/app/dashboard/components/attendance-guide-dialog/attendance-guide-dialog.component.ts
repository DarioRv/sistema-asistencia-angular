import { Component, Input } from '@angular/core';

@Component({
  selector: 'attendance-guide-dialog',
  templateUrl: './attendance-guide-dialog.component.html',
  styles: [
  ]
})
export class AttendanceGuideDialogComponent {
  @Input({required: true})
  public attendance: boolean = false;
}
