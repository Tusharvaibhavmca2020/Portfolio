import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PORTFOLIO } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  readonly data = PORTFOLIO;
  readonly currentRole = signal(PORTFOLIO.roles[0]);

  private index = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.data.roles.length;
      this.currentRole.set(this.data.roles[this.index]);
    }, 2600);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
