import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { MultiSelectInputComponent } from './multi-select-input/multi-select-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    SelectInputComponent,
    MultiSelectInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    TextInputComponent,
    SelectInputComponent,
    MultiSelectInputComponent,
  ],
})
export class VanillaComponentsModule {}
