import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { CodeBlockComponent } from './components/code-block.component';

@Component({
  selector: 'app-code-example',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 *ngIf="title" class="card-title">{{ title }}</h5>
          <div class="d-flex">
            <i class="i-btn fas fa-code" (click)="toggleCodeMode()"></i>
          </div>
        </div>

        <div *ngIf="!codeMode">
          <ng-content select="[running-code]"></ng-content>
        </div>
        <div *ngIf="codeMode">
          <ul class="nav nav-tabs">
            <ng-container *ngFor="let tab of tabs">
              <li
                *ngIf="tab.type && tab.type !== 'running-code'"
                class="nav-item"
              >
                <a
                  class="nav-link"
                  [ngClass]="{ active: template === tab.type }"
                  (click)="showTab(tab.type)"
                >
                  {{ tab.title }}
                </a>
              </li>
            </ng-container>
          </ul>
        </div>

        <div class="mt-3">
          <ng-container *ngFor="let codeBlock of codeBlocks">
            <ng-container
              *ngIf="
                codeBlock.type === template &&
                template !== 'running-code' &&
                codeMode === true
              "
              [ngTemplateOutlet]="codeBlock.templateRef"
            ></ng-container>
            <ng-container
              *ngIf="codeBlock.type === 'running-code' && codeMode === false"
              [ngTemplateOutlet]="codeBlock.templateRef"
            ></ng-container>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .i-btn,
      .nav-link {
        cursor: pointer;
      }
    `,
  ],
})
export class CodeExampleComponent implements AfterContentInit {
  @Input() title: string;
  @ContentChildren(CodeBlockComponent)
  codeBlocks: QueryList<CodeBlockComponent>;

  public codeMode = false;
  public template = 'html';
  public tabs: Array<any> = [];

  ngAfterContentInit(): void {
    this.initTabs();
  }

  initTabs(): void {
    this.codeBlocks.forEach((codeBlock) => {
      const tabExists = this.tabs.filter((tab) => tab.type === codeBlock.type);

      if (tabExists.length === 0) {
        this.tabs.push({ type: codeBlock.type, title: codeBlock.title });
      }
    });
  }

  toggleCodeMode(): void {
    this.codeMode = !this.codeMode;
  }

  showTab(template: string) {
    this.template = template;
  }
}
