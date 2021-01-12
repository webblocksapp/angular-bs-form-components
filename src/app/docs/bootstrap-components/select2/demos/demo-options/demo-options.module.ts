import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DemoOptionsComponent } from './demo-options.component';

@NgModule({
  declarations: [DemoOptionsComponent],
  imports: [SharedModule],
  exports: [DemoOptionsComponent],
})
export class DemoOptionsModule {}
