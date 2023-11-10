import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  @Input('appAutofocus') set autofocus(condition: boolean) {
    if (condition) {
      this.el.nativeElement.focus();
    }
  }
  constructor(private el: ElementRef) {}
}
