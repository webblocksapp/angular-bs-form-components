import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DocsContainerComponent } from './components/docs-container/docs-container.component';

@NgModule({
  declarations: [
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
  ],
  exports: [
    CommonModule,
    MenuHeaderComponent,
    OverviewComponent,
    SidebarComponent,
    DocsContainerComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
