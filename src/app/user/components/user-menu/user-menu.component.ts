import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/auth/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemeToggleButtonComponent } from '../../../shared/components/theme-toggle-button/theme-toggle-button.component';

@Component({
    selector: 'user-menu',
    templateUrl: './user-menu.component.html',
    styles: [
        `
      .menu-item {
        @apply px-2 md:hover:bg-slate-200 md:dark:hover:bg-slate-600 py-2 flex items-center gap-2 cursor-pointer;
      }
    `,
    ],
    imports: [MatIconButton, MatIcon, MatMiniFabButton, ThemeToggleButtonComponent]
})
export class UserMenuComponent {
  user: UserData = this.authService.currentUser()!;

  constructor(
    private authService: AuthenticationService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  /**
   * Sign out the user.
   */
  signOut(): void {
    this.authService.signOut();
    this.snackbarService.showSnackbar('Has cerrado sesión correctamente');
    this.router.navigate(['/auth/sign-in']);
  }
}
