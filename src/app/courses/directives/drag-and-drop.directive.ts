import { Directive, HostBinding, HostListener, output } from '@angular/core';

@Directive({ selector: '[dragAndDrop]' })
export class DragAndDropDirective {

  @HostBinding('class.dragover') fileOver: boolean = false;
  readonly fileDropped = output<FileList>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    const files = (event as DragEvent).dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
