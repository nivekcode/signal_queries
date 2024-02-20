import {Directive, inject, input, TemplateRef} from "@angular/core";

@Directive({
  selector: '[myTab]',
  standalone: true
})
export class TabDirective {
  tabTitle = input.required({
    alias: 'myTab'
  });
  template = inject(TemplateRef);
}
