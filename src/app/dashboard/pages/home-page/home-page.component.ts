import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-home-page',
  templateUrl: './home-page.component.html',
  styles: [
    `
    .guias {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 1rem;
    }

    .guia {
      cursor: pointer;
      border: 1px solid transparent;
    }

    .guia p {
      text-wrap: balance;
      text-align: center;
    }

    .guia:hover {
      border: 1px solid #5457cd;
    }
    `
  ]
})
export class HomePageComponent {
  public introduction: boolean = false;
  public students: boolean = false;
  public attendance: boolean = false;
}
