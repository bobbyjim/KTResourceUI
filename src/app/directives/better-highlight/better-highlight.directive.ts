import {Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'mistyrose';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'mistyrose' );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
  }

}
