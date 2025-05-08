import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { UserDataUpdateFormComponent } from '../../components/user-data-update-form/user-data-update-form.component';

@Component({
    templateUrl: './update-user-data-page.component.html',
    styles: [],
    imports: [NgSwitch, NgSwitchCase, UserDataUpdateFormComponent]
})
export class UpdateUserDataPageComponent {
  status: 'pending' | 'success' | 'fail' | 'error' = 'pending';

  setStatus(status: 'success' | 'fail' | 'error'): void {
    this.status = status;
  }
}
