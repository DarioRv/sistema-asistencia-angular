import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
    standalone: false
})
export class LoaderComponent {
  @Input() size: string = '30px';
}
