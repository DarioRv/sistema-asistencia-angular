import { Component, Input } from '@angular/core';

@Component({
  selector: 'students-list-guide-dialog',
  templateUrl: './students-list-guide-dialog.component.html',
  styles: [
  ]
})
export class StudentsListGuideDialogComponent {
  @Input({required: true})
  public students: boolean = false;
}
