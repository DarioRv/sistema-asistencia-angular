import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'course-settings',
  templateUrl: './course-settings.component.html',
  styles: [
  ],
  providers: [[MessageService]]
})
export class CourseSettingsComponent {

  constructor(private messageService: MessageService) {}

  disableAssistance(): boolean {
    console.log("check")
    return true;
  }

  onUpload(event: FileUploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
