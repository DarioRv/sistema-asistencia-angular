import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  exports: [
    MenubarModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
