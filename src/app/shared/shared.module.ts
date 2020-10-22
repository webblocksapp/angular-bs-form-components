import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DocsContainerComponent } from './components/docs-container/docs-container.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TabsComponent } from './components/tabs/tabs.component';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { HtmlComponent } from './components/code-example/html.component';
import { CssComponent } from './components/code-example/css.component';
import { TsComponent } from './components/code-example/ts.component';
import { DtoComponent } from './components/code-example/dto.component';
import { RunningCodeComponent } from './components/code-example/running-code.component';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
    TabsComponent,
    CodeExampleComponent,
    HtmlComponent,
    CssComponent,
    TsComponent,
    DtoComponent,
    RunningCodeComponent,
  ],
  exports: [
    CommonModule,
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
    HighlightModule,
    TabsComponent,
    CodeExampleComponent,
    HtmlComponent,
    CssComponent,
    TsComponent,
    DtoComponent,
    RunningCodeComponent,
  ],
  imports: [CommonModule, RouterModule, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class SharedModule {}
