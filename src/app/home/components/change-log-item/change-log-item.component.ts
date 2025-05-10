import { Component, input } from '@angular/core';
import { ChangeLogItem } from '../../interfaces/change-log-item.interface';
import { MaterialModule } from '../../../material/material.module';


@Component({
    selector: 'change-log-item',
    templateUrl: './change-log-item.component.html',
    styles: [],
    imports: [MaterialModule]
})
export class ChangeLogItemComponent {
  readonly log = input.required<ChangeLogItem>();
}
