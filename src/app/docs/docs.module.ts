import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { SidebarComponent } from '../common/components/sidebar/sidebar.component';

@NgModule({
  declarations: [DocsComponent, SidebarComponent],
  imports: [CommonModule, DocsRoutingModule],
})
export class DocsModule {}
