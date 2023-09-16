import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { ManualPageComponent } from './pages/manual-page/manual-page.component';
import { ChangeLogPageComponent } from './pages/change-log-page/change-log-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent,
    ManualPageComponent,
    ChangeLogPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
