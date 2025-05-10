import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
    selector: 'getting-started-guide-dialog',
    templateUrl: './getting-started-guide-dialog.component.html',
    styles: [],
    imports: [MaterialModule]
})
export class GettingStartedGuideDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GettingStartedGuideDialogComponent>
  ) {}
}
