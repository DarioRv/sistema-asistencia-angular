import { Component, EventEmitter, Output } from '@angular/core';
import { FileRemoveEvent, FileSelectEvent } from 'primeng/fileupload';
import { CsvReaderService } from '../../services/csv-reader.service';
import { Student } from '../../interfaces/student.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styles: [
  ]
})
export class UploadFileComponent {
  selectedFile: File | undefined;

  @Output()
  onUploadFile: EventEmitter<Student[]> = new EventEmitter();

  constructor(private csvReader: CsvReaderService, private snackbarService: SnackbarService) {}

  /**
   * Method to handle the file upload event
   * @param event FileUploadEvent
   */
  onSelect(event: FileSelectEvent) {
    for(let file of event.files) {
      this.selectedFile = file;
    }
    this.snackbarService.showSnackbar('Se ha seleccionado el archivo.');
  }

  /**
   * Method to handle the clear event, set the selectedFiles array to empty
   */
  onClear() {
    this.selectedFile = undefined;
    this.snackbarService.showSnackbar('Se ha eliminado el archivo.');
  }

  /**
   * Method to handle the file remove event, remove the file from the selectedFiles array
   * @param $event FileRemoveEvent
   */
  onRemove($event: FileRemoveEvent) {
    this.selectedFile = undefined;
    this.snackbarService.showSnackbar('Se ha eliminado el archivo.');
  }

  /**
   * Method to handle the upload event, read the csv file and emit the student list
   */
  onUpload() {
    this.snackbarService.showSnackbar('Procesando el archivo csv...');
    this.csvReader.read(this.selectedFile!)
      .then( (studentList) => {
        this.snackbarService.showSnackbar('Subiendo el archivo...');
        this.emitStudentList(studentList);
      })
      .catch( (error) => {
        this.snackbarService.showSnackbar('Error al procesar el archivo csv.')
      });
  }

  /**
   * Emit the student list to the parent component
   * @param studentList student list
   */
  emitStudentList(studentList: Student[]) {
    this.onUploadFile.emit(studentList);
  }
}
