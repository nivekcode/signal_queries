import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList} from "@angular/core";
import {AsyncPipe, NgFor, NgTemplateOutlet} from "@angular/common";
import {TabOldDirective} from "./tab-old.directive";
import {BehaviorSubject, combineLatest, map, Observable, startWith, Subject, tap, withLatestFrom} from "rxjs";


@Component({
  selector: 'my-old-tab-group',
  standalone: true,
  template: `
      <h1>My old tab group</h1>

      <div *ngFor="let tab of projectedTabs$ | async; let i = index"
           (click)="activeTab.next(i)"
           class="tab-header"
      >
          {{ tab.tabTitle }}
      </div>

      <div class="tab-content">
          <ng-template [ngTemplateOutlet]="(selectedTab$ | async)!.template"/>
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
    NgTemplateOutlet,
    NgFor,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupOldComponent implements AfterContentInit {
  @ContentChildren(TabOldDirective) tabs: QueryList<TabOldDirective> | undefined;
  activeTab = new BehaviorSubject(0);

  projectedTabs$!: Observable<any>;
  selectedTab$!: Observable<TabOldDirective>;

  ngAfterContentInit(): void {
    this.projectedTabs$ = this.tabs!.changes.pipe(
      map(() => this.tabs!.toArray()),
      startWith(this.tabs!.toArray())
    );

    this.selectedTab$ = this.activeTab.pipe(
      withLatestFrom(this.projectedTabs$),
      tap(console.log),
      map(([activeTab, tabs]) => tabs[activeTab])
    )
  }
}
