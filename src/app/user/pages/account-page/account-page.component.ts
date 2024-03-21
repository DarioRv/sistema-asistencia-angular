import { Component, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styles: [
  ]
})
export class AccountPageComponent {
  currentUser = computed(() => this.authService.currentUser());

  constructor(private authService: AuthenticationService) { }

}
