import { NgModule } from '@angular/core';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ContentNotAvailableComponent } from './components/content-not-available/content-not-available.component';
import { BasicCardPlaceholderComponent } from './components/basic-card-placeholder/basic-card-placeholder.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { SnackbarService } from './services/snackbar.service';
import { ThemeToggleButtonComponent } from './components/theme-toggle-button/theme-toggle-button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenubarComponent,
    ContentNotAvailableComponent,
    BasicCardPlaceholderComponent,
    ConfirmDialogComponent,
    LoaderComponent,
    ThemeToggleButtonComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialModule
  ],
  exports: [
    MenubarComponent,
    BasicCardPlaceholderComponent,
    ContentNotAvailableComponent,
    LoaderComponent,
    ThemeToggleButtonComponent
  ],
  providers: [
    SnackbarService
  ]
})
export class SharedModule { }
