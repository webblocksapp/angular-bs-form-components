import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { QuickStartComponent } from './quick-start/quick-start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quick-start',
  },
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'quick-start', component: QuickStartComponent },
      {
        path: 'data-groups',
        loadChildren: () =>
          import('./data-groups/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'data-input-base',
        loadChildren: () =>
          import('./data-input-base/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'base-model',
        loadChildren: () =>
          import('./base-model/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'base-model-array',
        loadChildren: () =>
          import('./base-model-array/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'bootstrap/setup',
        loadChildren: () =>
          import('./bootstrap-components/setup/index.module').then(
            (m) => m.IndexModule,
          ),
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
      {
        path: 'bootstrap/datepicker',
        loadChildren: () =>
          import('./bootstrap-components/datepicker/index.module').then(
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
