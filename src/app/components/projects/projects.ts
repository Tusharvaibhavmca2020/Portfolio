import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly data = PORTFOLIO;
}
