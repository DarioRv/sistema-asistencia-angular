import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { User } from 'src/app/auth/interfaces/user.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styles: [
  ]
})
export class AccountPageComponent implements OnInit {
  user?: User;

  constructor(private authService: AuthenticationService, private snackbarService: SnackbarService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.currentSession;
  }

  /**
   * Method to delete the current user account
   * @param id The id of the user to delete
   */
  deleteAccount(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '¿Esta seguro?', description: 'Esta a punto de eliminar su cuenta', confirmButtonText: 'Si, eliminar mi cuenta', cancelButtonText: 'Cancelar'}});

    if (!this.user) return;

    dialogRef.afterClosed()
    .pipe(
      filter(result => result),
      switchMap( () => this.authService.deleteUserById(this.user!.id)),
      filter(wasDeleted => wasDeleted)
    )
    .subscribe(() => {
      this.snackbarService.showSnackbar('Tu cuenta ha sido eliminada')
      this.router.navigate(['/']);
    });
  }
}
