import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Materias', icon: 'grid_view', url: 'courses'},
    {label: 'Mi perfil', icon: 'person', url: 'account'},
  ]
}
