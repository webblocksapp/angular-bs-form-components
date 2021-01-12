import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoOptionsComponent } from '../demo-options/demo-options.component';
import { IndexComponent } from './index.component';
import { RunningCodeComponent } from './running-code.component';

@NgModule({
  declarations: [IndexComponent, RunningCodeComponent, DemoOptionsComponent],
  imports: [SharedModule],
  exports: [IndexComponent],
})
export class DemoOverview1Module {}
