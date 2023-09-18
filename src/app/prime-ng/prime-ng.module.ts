import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  exports: [
    MenubarModule,
    DialogModule,
    FileUploadModule,
    MessagesModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
