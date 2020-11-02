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
      {
        path: 'data-groups',
        loadChildren: () =>
          import('./data-groups/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'bootstrap/radios',
        loadChildren: () =>
          import('./bootstrap-components/radios/index.module').then(
            (m) => m.IndexModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
