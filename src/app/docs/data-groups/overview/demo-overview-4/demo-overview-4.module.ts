import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index.component';
import { RunningCodeComponent } from './running-code.component';

@NgModule({
  declarations: [IndexComponent, RunningCodeComponent],
  imports: [SharedModule],
  exports: [IndexComponent],
})
export class DemoOverview4Module {}
