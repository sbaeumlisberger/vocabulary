import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { fromEvent, merge, of, Subscription, timer } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[vtLongPress]',
  standalone: true,
})
export class LongPressDirective implements OnDestroy {
  threshold = 1000;

  @Output()
  vtLongPress = new EventEmitter();

  private subscription: Subscription;

  constructor(elementRef: ElementRef) {
    const mousedown = fromEvent<MouseEvent>(elementRef.nativeElement, 'mousedown').pipe(
      filter((event) => event.button == 0),
      map(() => true),
    );
    const mouseup = fromEvent<MouseEvent>(window, 'mouseup').pipe(
      filter((event) => event.button == 0),
      map(() => false),
    );
    const touchstart = fromEvent(elementRef.nativeElement, 'touchstart').pipe(map(() => true));
    const touchEnd = fromEvent(elementRef.nativeElement, 'touchend').pipe(map(() => false));
    this.subscription = merge(mousedown, mouseup, touchstart, touchEnd)
      .pipe(
        switchMap((down) => (down ? timer(this.threshold) : of(null))),
        filter((value) => value == 0),
      )
      .subscribe(() => this.vtLongPress.emit());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
