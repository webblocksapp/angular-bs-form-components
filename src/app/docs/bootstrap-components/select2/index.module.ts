import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { ExamplesComponent } from './examples/examples.component';
import { DemoOverview1Module } from './demos/demo-overview-1/demo-overview-1.module';
import { DemoOverview2Module } from './demos/demo-overview-2/demo-overview-2.module';
import { Example1Module } from './examples/example-1/example-1.module';
import { Example2Module } from './examples/example-2/example-2.module';
import { Example3Module } from './examples/example-3/example-3.module';

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
    DemoOverview2Module,
    Example1Module,
    Example2Module,
    Example3Module,
  ],
})
export class IndexModule {}
