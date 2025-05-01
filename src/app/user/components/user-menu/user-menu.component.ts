import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/auth/interfaces/user-data.interface';
import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styles: [
    `
      .menu-item {
        @apply px-2 py-2 flex items-center gap-2 mx-1 rounded-md;
      }

      .menu-item-interactive {
        @apply cursor-pointer md:hover:bg-core-primary/20 md:hover:text-core-primary md:dark:hover:bg-slate-600 md:dark:hover:text-white transition-colors duration-200 ease-in-out;
      }
    `,
  ],
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
