import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // display something / insert template
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // display nothing / remove template
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,        // the template to show
              private viewContainerRef: ViewContainerRef) { // the context in the DOM


  }

}
