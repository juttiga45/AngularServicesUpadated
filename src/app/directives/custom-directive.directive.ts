import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]"
})
export class CustomDirectiveDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log(Element);
    renderer.setStyle(elem.nativeElement, "backgroundColor", "grey");
  }
}
