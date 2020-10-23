import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './code-example.component';
import { CodeBlockComponent } from './components/code-block.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [CodeExampleComponent, CodeBlockComponent],
  imports: [CommonModule, HighlightModule],
  exports: [CodeExampleComponent, CodeBlockComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class CodeExampleModule {}
