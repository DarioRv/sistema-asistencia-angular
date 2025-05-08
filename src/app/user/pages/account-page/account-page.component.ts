import { Component, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';;

import { AuthenticationService } from 'src/app/auth/services/auth.service';
import { ConfirmDeleteAccountDialogComponent } from '../../components/confirm-delete-account-dialog/confirm-delete-account-dialog.component';

import { BasicCardPlaceholderComponent } from '../../../shared/components/basic-card-placeholder/basic-card-placeholder.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatAnchor } from '@angular/material/button';
import { MatDivider } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styles: [],
    imports: [BasicCardPlaceholderComponent, MatCard, MatCardContent, MatIcon, MatButton, MatDivider, MatAnchor, RouterLink]
})
export class AccountPageComponent {
  currentUser = computed(() => this.authService.currentUser());

  constructor(
    private authService: AuthenticationService,
    private dialog: MatDialog,
  ) { }

  /**
   * Open the dialog to confirm the deletion of the account
   */
  deleteAccount(): void {
    this.dialog.open(ConfirmDeleteAccountDialogComponent, { data: { correo: this.currentUser()!.correo } });
  }
}
