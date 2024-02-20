import {ChangeDetectionStrategy, Component, computed, signal} from "@angular/core";

import {TabDirective} from "./tabs/tab.directive";
import {TabGroupComponent} from "./tabs/tab-group.component";

@Component({
  selector: 'my-brand-new-tabs',
  standalone: true,
  template: `
      <h1>Tabs with Signal queries</h1>
      <my-tab-group>
          <div *myTab="'Tab one'">First tab content</div>
          <div *myTab="'Tab two'">Second tab content</div>
          <div *myTab="'Tab three'">Third tab content</div>

          @if(renderFourth()) {
              <div *myTab="'Tab four'">Fourth tab content</div>
          }
      </my-tab-group>
      <button (click)="toggle()">Render fourth item</button>
  `,
  imports: [
    TabDirective,
    TabGroupComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NewTabsComponent {
  renderFourth = signal(false);

  toggle(){
    this.renderFourth.update(v => !v);
  }
}
