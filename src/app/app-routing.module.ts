import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: '', component: BasicInputComponent },
  { path: 'basic-input', component: BasicInputComponent },
  { path: 'select', component: SelectComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
