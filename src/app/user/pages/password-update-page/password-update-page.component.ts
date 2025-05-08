import { Component } from '@angular/core';

import { PasswordUpdateFormComponent } from '../../components/password-update-form/password-update-form.component';
import { RouterLink } from '@angular/router';

@Component({
    templateUrl: './password-update-page.component.html',
    styles: [],
    imports: [PasswordUpdateFormComponent, RouterLink]
})
export class PasswordUpdatePageComponent {
  status: 'pending' | 'success' | 'fail' | 'error' = 'pending';

  onChangeStatus(status: 'pending' | 'success' | 'fail' | 'error'): void {
    this.status = status;
  }
}
