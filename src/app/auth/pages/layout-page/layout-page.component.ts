import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarComponent } from '../../../shared/components/menubar/menubar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'auth-layout-page',
    templateUrl: './layout-page.component.html',
    styles: [],
    imports: [MenubarComponent, RouterOutlet]
})
export class LayoutPageComponent {
  public items?: MenuItem[];
}
