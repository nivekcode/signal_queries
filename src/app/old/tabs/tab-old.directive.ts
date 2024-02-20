import {Directive, inject, Input, input, TemplateRef} from "@angular/core";

@Directive({
  selector: '[myOldTab]',
  standalone: true
})
export class TabOldDirective {
  @Input({
    required: true,
    alias: 'myOldTab'
  }) tabTitle!: string;

  template = inject(TemplateRef);
}
