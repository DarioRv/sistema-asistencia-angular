import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';

@Component({
    selector: 'shared-menubar',
    templateUrl: './menubar.component.html',
    styles: [],
    imports: [MatAnchor, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, ThemeToggleButtonComponent]
})
export class MenubarComponent implements OnInit {
  public items?: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/app',
      },
      {
        label: 'Acerca de',
        items: [
          {
            label: 'Manual',
            routerLink: '/app/manual',
          },
          {
            label: 'Change log',
            routerLink: '/app/change-log',
          },
        ],
      },
      {
        label: 'Ingresar',
        routerLink: '/auth/sign-in',
      },
      {
        label: 'Registrarme',
        routerLink: '/auth/sign-up',
      },
    ];
  }
}
