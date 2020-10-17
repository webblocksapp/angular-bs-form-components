import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DocsContainerComponent } from './components/docs-container/docs-container.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
    TabsComponent,
  ],
  exports: [
    CommonModule,
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
    HighlightModule,
    TabsComponent,
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
