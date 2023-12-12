import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileRemoveEvent, FileSelectEvent } from 'primeng/fileupload';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styles: [
  ]
})
export class UploadFileComponent {
  selectedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  /**
   * Method to handle the file upload event
   * @param event FileUploadEvent
   */
  onSelect(event: FileSelectEvent) {
    for(let file of event.files) {
      this.selectedFiles.push(file);
    }
    console.log(this.selectedFiles.length);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  /**
   * Method to handle the clear event, set the selectedFiles array to empty
   */
  onClear() {
    console.log(this.selectedFiles.length);
    this.selectedFiles = [];
  }

  /**
   * Method to handle the file remove event, remove the file from the selectedFiles array
   * @param $event FileRemoveEvent
   */
  onRemove($event: FileRemoveEvent) {
    console.log(this.selectedFiles.length);
    this.selectedFiles.splice(this.selectedFiles.indexOf($event.file), 1);
  }
}
