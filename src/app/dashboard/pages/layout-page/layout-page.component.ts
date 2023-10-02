import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'dashboard-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Guía rapida', icon: 'book_2', url: 'start'},
    {label: 'Materias', icon: 'grid_view', url: 'courses'},
    {label: 'Mi perfil', icon: 'person', url: 'account'},
  ]

  constructor(private cookieService: CookieService, private router: Router) { }

  logout(): void {
    this.cookieService.delete('user');
    this.router.navigate(['/']);
  }
}
