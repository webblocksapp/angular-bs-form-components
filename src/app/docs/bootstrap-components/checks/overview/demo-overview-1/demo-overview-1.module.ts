import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoOptionsModule } from '../demo-options/demo-options.module';
import { IndexComponent } from './index.component';
import { RunningCodeComponent } from './running-code.component';

@NgModule({
  declarations: [IndexComponent, RunningCodeComponent],
  imports: [SharedModule, DemoOptionsModule],
  exports: [IndexComponent],
})
export class DemoOverview1Module {}
