import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './vanilla-text-input/vanilla-text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule],
  exports: [TextInputComponent],
})
export class VanillaComponentsModule {}
