import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './code-example.component';
import { ComponentComponent } from './components/component.component';
import { CssComponent } from './components/css.component';
import { DtoComponent } from './components/dto.component';
import { HtmlComponent } from './components/html.component';
import { RunningCodeComponent } from './components/running-code.component';

@NgModule({
  declarations: [
    CodeExampleComponent,
    HtmlComponent,
    CssComponent,
    ComponentComponent,
    DtoComponent,
    RunningCodeComponent,
  ],
  imports: [CommonModule],
  exports: [
    CodeExampleComponent,
    HtmlComponent,
    CssComponent,
    ComponentComponent,
    DtoComponent,
    RunningCodeComponent,
  ],
})
export class CodeExampleModule {}
