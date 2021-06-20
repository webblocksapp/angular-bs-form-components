import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ApiComponent } from './api/api.component';
import { ExamplesComponent } from './examples/examples.component';
import { DemoOverview1Module } from './overview/demo-overview-1/demo-overview-1.module';
import { DemoOverview2Module } from './overview/demo-overview-2/demo-overview-2.module';
import { Example1Module } from './examples/example-1/example-1.module';
import { Example2Module } from './examples/example-2/example-2.module';
import { Example3Module } from './examples/example-3/example-3.module';
import { Example4Module } from './examples/example-4/example-4.module';
import { Example5Module } from './examples/example-5/example-5.module';
import { Example6Module } from './examples/example-6/example-6.module';
import { Example7Module } from './examples/example-7/example-7.module';

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
    Example4Module,
    Example5Module,
    Example6Module,
    Example7Module,
  ],
})
export class IndexModule {}
