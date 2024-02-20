import {ChangeDetectionStrategy, Component, computed, contentChildren, signal} from "@angular/core";
import {NgTemplateOutlet} from "@angular/common";

import {TabDirective} from "./tab.directive";

@Component({
  selector: 'my-tab-group',
  standalone: true,
  template: `
      @for (tab of tabs(); track tab.tabTitle(); let i = $index) {
          <div class="tab-header" (click)="activeTab.set(i)">
              {{ tab.tabTitle() }}
          </div>
      }
      <div class="tab-content">
      <ng-template [ngTemplateOutlet]="selectedTab().template"/>
      </div>
  `,
  styles: `
    .tab-header {
      padding: 10px;
      border: 1px solid #ccc;
      display: inline-block;
      cursor: pointer;
    }

    .tab-content {
      padding: 10px;
      border: 1px solid #ccc;
    }
  `,
  imports: [
    NgTemplateOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent {
  tabs = contentChildren(TabDirective);
  activeTab = signal(0);

  selectedTab = computed(
    () => this.tabs()[this.activeTab()]
  );
}
