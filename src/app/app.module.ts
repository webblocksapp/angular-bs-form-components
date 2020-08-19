import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { NgBsFormComponentsModule } from 'projects/ng-bs-form-components/src/public-api';
import { MenuHeaderComponent } from './common/components/menu-header/menu-header.component';
import { StyleManagerService } from './common/services/style-manager.service';
import { ScriptManagerService } from './common/services/script-manager.service';
import { NgSmartAdminService } from './common/services/ng-smart-admin.service';

@NgModule({
  declarations: [AppComponent, BasicInputComponent, MenuHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgBsFormComponentsModule],
  providers: [StyleManagerService, ScriptManagerService, NgSmartAdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
