import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'dashboard-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnDestroy {
  public sidebarItems = [
    [
      {label: 'Guía rapida', icon: 'book_2', url: 'start'},
      {label: 'Materias', icon: 'grid_view', url: 'courses'},
      {label: 'Mi perfil', icon: 'person', url: 'account'}

    ],
    [
      {label: 'Soporte', icon: 'support_agent', url: ''},
      {label: 'Opinar', icon: 'feedback', url: ''},
    ]
  ]

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnDestroy(): void {
    this.authService.logout();
  }

  /**
   * Method to logout and redirect to the home page
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
