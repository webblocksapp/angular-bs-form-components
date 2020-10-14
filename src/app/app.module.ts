import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { NgFormsModule } from 'projects/ng-forms/src/public-api';
import { AppComponent } from './app.component';
import { StyleManagerService } from './shared/services/style-manager.service';
import { ScriptManagerService } from './shared/services/script-manager.service';
import { NgSmartAdminService } from './shared/services/ng-smart-admin.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgFormsModule, SharedModule],
  providers: [StyleManagerService, ScriptManagerService, NgSmartAdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
