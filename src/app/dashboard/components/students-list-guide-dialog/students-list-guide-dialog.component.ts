import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
    selector: 'students-list-guide-dialog',
    templateUrl: './students-list-guide-dialog.component.html',
    styles: [],
    imports: [MaterialModule]
})
export class StudentsListGuideDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentsListGuideDialogComponent>
  ) {}
}
