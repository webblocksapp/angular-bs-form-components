import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectInputComponent } from './select-input/select-input.component';

@NgModule({
  declarations: [TextInputComponent, SelectInputComponent],
  imports: [CommonModule],
  exports: [TextInputComponent, SelectInputComponent],
})
export class VanillaComponentsModule {}
