import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = this.defaultColor; // alias default to directive name

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue' );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor; // 'mistyrose';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'mistyrose' );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor; // 'transparent';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
  }

}
