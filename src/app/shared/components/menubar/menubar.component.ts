import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styles: [
    `
      header {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0 0 16px 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    `,
  ],
})
export class MenubarComponent implements OnInit {
  public items?: MenuItem[];
  public authItems?: MenuItem[];

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
    ];

    this.authItems = [
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
