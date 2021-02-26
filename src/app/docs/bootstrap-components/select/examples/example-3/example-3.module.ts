import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExampleOptionsModule } from './example-options/example-options.module';
import { IndexComponent } from './index.component';
import { RunningCodeComponent } from './running-code.component';

@NgModule({
  declarations: [IndexComponent, RunningCodeComponent],
  imports: [SharedModule, ExampleOptionsModule],
  exports: [IndexComponent],
})
export class Example3Module {}
