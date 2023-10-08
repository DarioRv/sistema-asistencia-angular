import { NgModule } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ContentNotAvailableComponent } from './components/content-not-available/content-not-available.component';
import { BasicCardPlaceholderComponent } from './components/basic-card-placeholder/basic-card-placeholder.component';



@NgModule({
  declarations: [
    MenubarComponent,
    ContentNotAvailableComponent,
    BasicCardPlaceholderComponent,
  ],
  imports: [
    PrimeNgModule
  ],
  exports: [
    MenubarComponent,
    BasicCardPlaceholderComponent,
    ContentNotAvailableComponent,
  ]
})
export class SharedModule { }
