import { Component } from '@angular/core';

@Component({
    templateUrl: './reset-password-page.component.html',
    styles: [],
    standalone: false
})
export class ResetPasswordPageComponent {
  status: 'success' | 'error' | 'fail' | 'pending' = 'pending';

  setStatus(status: 'success' | 'error' | 'fail' | 'pending'): void {
    this.status = status;
  }
}
