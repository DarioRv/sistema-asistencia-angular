import { Component, input } from '@angular/core';

@Component({
    selector: 'shared-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  readonly size = input<string>('30px');
}
