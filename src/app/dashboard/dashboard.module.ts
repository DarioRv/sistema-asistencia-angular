import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { AccountPageComponent } from './pages/account-page/account-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    AccountPageComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CookieService]
})
export class DashboardModule { }
