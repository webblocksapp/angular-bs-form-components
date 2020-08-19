import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInputComponent } from './basic-input/basic-input.component';

const routes: Routes = [
  { path: '', component: BasicInputComponent },
  { path: 'basic-input', component: BasicInputComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
