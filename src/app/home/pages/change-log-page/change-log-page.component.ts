import { Component } from '@angular/core';
import { ChangeLogItem } from '../../interfaces/change-log-item.interface';
import { MatIcon } from '@angular/material/icon';

import { ChangeLogItemComponent } from '../../components/change-log-item/change-log-item.component';

@Component({
    selector: 'app-change-log-page',
    templateUrl: './change-log-page.component.html',
    styles: [],
    imports: [MatIcon, ChangeLogItemComponent]
})
export class ChangeLogPageComponent {
  changeLogItems: ChangeLogItem[] = [
  ];
}
