import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
    selector: 'attendance-guide-dialog',
    templateUrl: './attendance-guide-dialog.component.html',
    styles: [],
    imports: [MatDialogTitle, MatMiniFabButton, MatDialogClose, MatIcon, CdkScrollable, MatDialogContent]
})
export class AttendanceGuideDialogComponent {
  constructor(public dialogRef: MatDialogRef<AttendanceGuideDialogComponent>) {}
}
