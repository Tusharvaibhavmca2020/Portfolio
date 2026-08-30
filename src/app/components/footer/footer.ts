import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly data = PORTFOLIO;
  // Static year — this is a static site; update if rebuilt in a new year.
  readonly year = 2026;
}
