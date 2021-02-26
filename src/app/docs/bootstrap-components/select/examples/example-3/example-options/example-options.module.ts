import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ExampleOptionsComponent } from './example-options.component';

@NgModule({
  declarations: [ExampleOptionsComponent],
  imports: [SharedModule],
  exports: [ExampleOptionsComponent],
})
export class ExampleOptionsModule {}
