import { Component } from '@angular/core';
import { ThemeToggleButtonComponent } from '../../../shared/components/theme-toggle-button/theme-toggle-button.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styles: [],
    imports: [ThemeToggleButtonComponent, RouterLink, RouterOutlet]
})
export class LayoutPageComponent {

}
