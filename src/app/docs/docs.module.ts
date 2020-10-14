import { NgModule } from '@angular/core';
import { DocsRoutingModule } from './docs-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { SharedModule } from '../shared/shared.module';
import { DocsComponent } from './docs.component';

@NgModule({
  declarations: [DocsComponent, IntroductionComponent],
  imports: [DocsRoutingModule, SharedModule],
})
export class DocsModule {}
