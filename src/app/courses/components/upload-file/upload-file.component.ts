import { Component, EventEmitter, Output } from '@angular/core';
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
  selectedFile?: File | null;

  @Output()
  onUploadFile: EventEmitter<Student[]> = new EventEmitter();

  fileIcon = 'assets/svg/archivo-csv.svg';

  constructor(private csvReader: CsvReaderService, private snackbarService: SnackbarService) {}

  /**
   * Method to handle the drop event
   * @param event FileList with the files dropped
   */
  onDropFile(event: FileList) {
    if (!event || !event.item(0)) {
      this.snackbarService.showSnackbar('Hubo un error al subir el archivo.');
      return;
    }
    this.selectedFile = event.item(0)
    this.snackbarService.showSnackbar('Se ha seleccionado el archivo.');
  }

  onSelectFileFromBrowser(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files[0]) {
      this.snackbarService.showSnackbar('Hubo un error al subir el archivo.');
      return;
    }
    this.selectedFile = input.files[0];
    this.snackbarService.showSnackbar('Se ha seleccionado el archivo.');
  }

  /**
   * removes the selected file
   */
  onRemove() {
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
    this.selectedFile = null;
  }

  /**
   * Emit the student list to the parent component
   * @param studentList student list
   */
  emitStudentList(studentList: Student[]) {
    this.onUploadFile.emit(studentList);
  }
}
