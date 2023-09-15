import { Component } from '@angular/core';

@Component({
  selector: 'course-settings',
  templateUrl: './course-settings.component.html',
  styles: [
  ]
})
export class CourseSettingsComponent {

  disableAssistance(): boolean {
    console.log("check")
    return true;
  }
}
