import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './code-example.component';
import { CodeBlockComponent } from './components/code-block.component';

@NgModule({
  declarations: [CodeExampleComponent, CodeBlockComponent],
  imports: [CommonModule],
  exports: [CodeExampleComponent, CodeBlockComponent],
})
export class CodeExampleModule {}
