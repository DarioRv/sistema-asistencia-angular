import { NgModule } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ContentNotAvailableComponent } from './components/content-not-available/content-not-available.component';
import { BasicCardPlaceholderComponent } from './components/basic-card-placeholder/basic-card-placeholder.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    MenubarComponent,
    ContentNotAvailableComponent,
    BasicCardPlaceholderComponent,
    ConfirmDialogComponent,
    LoaderComponent,
  ],
  imports: [
    PrimeNgModule,
    MaterialModule
  ],
  exports: [
    MenubarComponent,
    BasicCardPlaceholderComponent,
    ContentNotAvailableComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
