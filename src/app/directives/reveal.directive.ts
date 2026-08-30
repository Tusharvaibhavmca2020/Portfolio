import {
  Directive,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  inject,
  input,
} from '@angular/core';

/**
 * Adds a fade-in-on-scroll reveal. Apply `appReveal` to any element that has
 * the `.reveal` class; it toggles `.is-visible` when scrolled into view.
 * Optional `[revealDelay]` (ms) staggers grouped elements.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private host = inject(ElementRef<HTMLElement>);
  readonly revealDelay = input<number>(0);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    el.classList.add('reveal');
    if (this.revealDelay()) {
      el.style.transitionDelay = `${this.revealDelay()}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
