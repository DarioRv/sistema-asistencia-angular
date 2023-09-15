import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styles: [
  ]
})
export class MenubarComponent implements OnInit {
  public items?: MenuItem[];

  ngOnInit(): void {
      this.items = [
        {
          label: 'Home',
          routerLink: '/'
        },
        {
          label: 'Acerca de',
          items: [
            {
              label: 'Manual'
            },
            {
              label: 'Docs'
            }
          ]
        },
        {
          label: 'Ingresar',
          routerLink: '/auth/sign-in'
        },
        {
          label: 'Registrarme',
          routerLink: '/auth/sign-up'
        }
      ]
  }
}
