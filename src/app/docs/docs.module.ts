import { NgModule } from '@angular/core';
import { DocsRoutingModule } from './docs-routing.module';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { SharedModule } from '@shared/shared.module';
import { DocsComponent } from './docs.component';

@NgModule({
  declarations: [DocsComponent, QuickStartComponent],
  imports: [DocsRoutingModule, SharedModule],
})
export class DocsModule {}
