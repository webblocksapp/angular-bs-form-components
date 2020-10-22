import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { CssComponent } from './css.component';
import { DtoComponent } from './dto.component';
import { HtmlComponent } from './html.component';
import { TsComponent } from './ts.component';

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
          <ng-content select="app-running-code"></ng-content>
        </div>
        <div *ngIf="codeMode">
          <ul class="nav nav-tabs">
            <li *ngIf="html" class="nav-item">
              <a
                class="nav-link"
                [ngClass]="{ active: template === 'html' }"
                (click)="showTab('html')"
                >HTML</a
              >
            </li>
            <li *ngIf="css" class="nav-item">
              <a
                class="nav-link"
                [ngClass]="{ active: template === 'css' }"
                (click)="showTab('css')"
                >CSS</a
              >
            </li>
            <li *ngIf="ts" class="nav-item">
              <a
                class="nav-link"
                [ngClass]="{ active: template === 'ts' }"
                (click)="showTab('ts')"
                >TS</a
              >
            </li>
            <li *ngIf="dto" class="nav-item">
              <a
                class="nav-link"
                [ngClass]="{ active: template === 'dto' }"
                (click)="showTab('dto')"
              >
                TS (DTO)
              </a>
            </li>
          </ul>

          <div class="mt-4">
            <ng-content
              *ngIf="template === 'html'"
              select="app-html"
            ></ng-content>
            <ng-content
              *ngIf="template === 'css'"
              select="app-css"
            ></ng-content>
            <ng-content *ngIf="template === 'ts'" select="app-ts"></ng-content>
            <ng-content
              *ngIf="template === 'dto'"
              select="app-dto"
            ></ng-content>
          </div>
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
export class CodeExampleComponent {
  @Input() title: string;
  @ContentChild(HtmlComponent) html: HtmlComponent;
  @ContentChild(CssComponent) css: CssComponent;
  @ContentChild(TsComponent) ts: TsComponent;
  @ContentChild(DtoComponent) dto: DtoComponent;

  public codeMode = false;
  public template = 'html';

  toggleCodeMode(): void {
    this.codeMode = !this.codeMode;
  }

  showTab(template: string) {
    this.template = template;
  }
}
