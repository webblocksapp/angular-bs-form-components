import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './common/components/menu-header/menu-header.component';
import { NgFormsModule } from 'projects/ng-forms/src/public-api';
import { StyleManagerService } from './common/services/style-manager.service';
import { ScriptManagerService } from './common/services/script-manager.service';
import { NgSmartAdminService } from './common/services/ng-smart-admin.service';

@NgModule({
  declarations: [AppComponent, MenuHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgFormsModule],
  providers: [StyleManagerService, ScriptManagerService, NgSmartAdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
