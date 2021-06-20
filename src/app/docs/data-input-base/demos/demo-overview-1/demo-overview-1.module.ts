import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index.component';
import { RunningCodeComponent } from './running-code.component';
import { TextInputComponent } from './vanilla-text-input/vanilla-text-input.component';

@NgModule({
  declarations: [IndexComponent, TextInputComponent, RunningCodeComponent],
  imports: [SharedModule],
  exports: [IndexComponent],
})
export class DemoOverview1Module {}
