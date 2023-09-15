import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    PrimeNgModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class SharedModule { }
