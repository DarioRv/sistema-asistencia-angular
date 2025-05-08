import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'getting-started-guide-dialog',
    templateUrl: './getting-started-guide-dialog.component.html',
    styles: [],
    standalone: false
})
export class GettingStartedGuideDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GettingStartedGuideDialogComponent>
  ) {}
}
