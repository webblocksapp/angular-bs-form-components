import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInputComponent } from './demos/basic-input/basic-input.component';
import { CheckboxComponent } from './demos/checkbox/checkbox.component';
import { DatepickerComponent } from './demos/datepicker/datepicker.component';
import { FileComponent } from './demos/file/file.component';
import { RadioComponent } from './demos/radio/radio.component';
import { SelectComponent } from './demos/select/select.component';
import { Select2Component } from './demos/select2/select2.component';

const routes: Routes = [
  { path: '', component: BasicInputComponent },
  { path: 'basic-input', component: BasicInputComponent },
  { path: 'select2', component: Select2Component },
  { path: 'select', component: SelectComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'file', component: FileComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
