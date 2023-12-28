import { Component, Input } from '@angular/core';

@Component({
  selector: 'getting-started-guide-dialog',
  templateUrl: './getting-started-guide-dialog.component.html',
  styles: [
  ]
})
export class GettingStartedGuideDialogComponent {
  @Input({required: true})
  public introduction: boolean = false;
}
