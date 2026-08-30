import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly data = PORTFOLIO;
}
