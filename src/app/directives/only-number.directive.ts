import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private _el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initValue.replace(/[^0-9]*/g, '');
    if ( initValue !== this._el.nativeElement.value) {
      console.log(event)
      event.stopPropagation();
    }
  }

}
