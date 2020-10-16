import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { SetupComponent } from './getting-started/setup.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: '', component: IntroductionComponent },
      { path: 'setup', component: SetupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
