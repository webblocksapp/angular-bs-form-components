import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { NgFormComponentsModule } from 'projects/ng-form-components/src/public-api';
import { MenuHeaderComponent } from './common/components/menu-header/menu-header.component';
import { StyleManagerService } from './common/services/style-manager.service';
import { ScriptManagerService } from './common/services/script-manager.service';
import { NgSmartAdminService } from './common/services/ng-smart-admin.service';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [AppComponent, BasicInputComponent, MenuHeaderComponent, SelectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFormComponentsModule,
    FormsModule,
  ],
  providers: [StyleManagerService, ScriptManagerService, NgSmartAdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
