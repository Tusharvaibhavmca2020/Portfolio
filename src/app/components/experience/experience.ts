import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly data = PORTFOLIO;
}
