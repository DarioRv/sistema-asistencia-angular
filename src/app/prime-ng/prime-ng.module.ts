import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';



@NgModule({
  exports: [
    MenubarModule,
    DialogModule,
    FileUploadModule,
    MessagesModule,
    SkeletonModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
