import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly data = PORTFOLIO;
}
