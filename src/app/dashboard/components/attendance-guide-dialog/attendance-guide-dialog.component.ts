import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'attendance-guide-dialog',
    templateUrl: './attendance-guide-dialog.component.html',
    styles: [],
    standalone: false
})
export class AttendanceGuideDialogComponent {
  constructor(public dialogRef: MatDialogRef<AttendanceGuideDialogComponent>) {}
}
