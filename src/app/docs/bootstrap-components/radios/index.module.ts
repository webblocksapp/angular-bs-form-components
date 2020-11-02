import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { ExamplesComponent } from './examples/examples.component';
import { DemoOverview1Module } from './demos/demo-overview-1/demo-overview-1.module';

@NgModule({
  declarations: [
    IndexComponent,
    OverviewComponent,
    ApiComponent,
    ExamplesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule,
    DemoOverview1Module,
  ],
})
export class IndexModule {}
