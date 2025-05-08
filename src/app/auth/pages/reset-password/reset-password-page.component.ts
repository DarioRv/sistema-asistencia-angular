import { Component } from '@angular/core';

import { ResetPasswordFormComponent } from '../../components/reset-password-form/reset-password-form.component';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: './reset-password-page.component.html',
    styles: [],
    imports: [ResetPasswordFormComponent, RouterLink]
})
export class ResetPasswordPageComponent {
  status: 'success' | 'error' | 'fail' | 'pending' = 'pending';

  setStatus(status: 'success' | 'error' | 'fail' | 'pending'): void {
    this.status = status;
  }
}
