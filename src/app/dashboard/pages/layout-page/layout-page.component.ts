import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'dashboard-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {
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

  public title: string = 'Dashboard';
  public mode: MatDrawerMode = 'side';

  constructor(private authService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.mode = result.matches ? 'over' : 'side';
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      map(route => route.snapshot.data)
    ).subscribe((event) => {
      this.title = event['title'];
    });
  }

  /**
   * Method to logout and redirect to the home page
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
