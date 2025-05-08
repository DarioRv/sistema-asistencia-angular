import { Component, input } from '@angular/core';
import { ChangeLogItem } from '../../interfaces/change-log-item.interface';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { MatChipListbox, MatChip } from '@angular/material/chips';


@Component({
    selector: 'change-log-item',
    templateUrl: './change-log-item.component.html',
    styles: [],
    imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatChipListbox, MatChip, MatExpansionPanelDescription]
})
export class ChangeLogItemComponent {
  readonly log = input.required<ChangeLogItem>();
}
