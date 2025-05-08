import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatMiniFabButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatStepper, MatStep, MatStepperPrevious, MatStepperNext } from '@angular/material/stepper';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
    selector: 'getting-started-guide-dialog',
    templateUrl: './getting-started-guide-dialog.component.html',
    styles: [],
    imports: [MatDialogTitle, MatMiniFabButton, MatDialogClose, MatIcon, MatStepper, CdkScrollable, MatDialogContent, MatStep, MatButton, MatStepperPrevious, MatStepperNext]
})
export class GettingStartedGuideDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GettingStartedGuideDialogComponent>
  ) {}
}
