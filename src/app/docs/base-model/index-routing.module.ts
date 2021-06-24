import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { ExamplesComponent } from './examples/examples.component';
import { IndexComponent } from './index.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'api', component: ApiComponent },
      { path: 'examples', component: ExamplesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
