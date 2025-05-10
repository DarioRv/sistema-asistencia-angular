import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
    selector: 'attendance-guide-dialog',
    templateUrl: './attendance-guide-dialog.component.html',
    styles: [],
    imports: [MaterialModule]
})
export class AttendanceGuideDialogComponent {
  constructor(public dialogRef: MatDialogRef<AttendanceGuideDialogComponent>) {}
}
