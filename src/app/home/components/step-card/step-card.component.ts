import { Component, Input } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'step-card',
  templateUrl: './step-card.component.html',
  styles: [
    `
    .step-card {
      /* width: fit-content; */
      border-radius: 25px;
    }

    .step-card .step-number {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: #c73798;
      top: -2rem;
      display: grid;
    }

    .step-card .step-content {
      background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(30,50,100,1) 0%, rgba(104,53,123,1) 72%, rgba(201,57,154,1) 100%);
      border-radius: 25px;
      padding: 4rem 2rem;
    }

    .step-card .step-content p {
      text-wrap: balance;
    }
    `
  ]
})
export class StepCardComponent {
  @Input({required: true}) step!: Step;
}
