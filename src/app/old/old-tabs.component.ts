import {ChangeDetectionStrategy, Component} from "@angular/core";
import {TabGroupOldComponent} from "./tabs/tab-group-old.component";
import {TabDirective} from "../new/tabs/tab.directive";
import {TabOldDirective} from "./tabs/tab-old.directive";
import {NgIf} from "@angular/common";

@Component({
  selector: 'my-brand-old-tabs',
  standalone: true,
  template: `
      <h1>Tabs with traditional queries</h1>
      <my-old-tab-group>
          <div *myOldTab="'Tab one'">First tab content</div>
          <div *myOldTab="'Tab two'">Second tab content</div>
          <div *myOldTab="'Tab three'">Third tab content</div>
          <ng-container *ngIf="renderFourth">
              <div *myOldTab="'Tab four'">Forth tab content</div>
          </ng-container>
      </my-old-tab-group>

      <button (click)="renderFourth = !renderFourth">Render fourth</button>
  `,
  imports: [
    TabGroupOldComponent,
    TabOldDirective,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class OldTabsComponent {
  renderFourth = false;
}
