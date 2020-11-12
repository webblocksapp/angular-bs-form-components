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
        path: 'bootstrap/input',
        loadChildren: () =>
          import('./bootstrap-components/input/index.module').then(
            (m) => m.IndexModule,
          ),
      },
      {
        path: 'bootstrap/select',
        loadChildren: () =>
          import('./bootstrap-components/select/index.module').then(
            (m) => m.IndexModule,
          ),
      },
      {
        path: 'bootstrap/select2',
        loadChildren: () =>
          import('./bootstrap-components/select2/index.module').then(
            (m) => m.IndexModule,
          ),
      },
      {
        path: 'bootstrap/checks',
        loadChildren: () =>
          import('./bootstrap-components/checks/index.module').then(
            (m) => m.IndexModule,
          ),
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
