import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInputComponent } from './demos/basic-input/basic-input.component';
import { NgFormsModule } from 'projects/ng-forms/src/public-api';
import { MenuHeaderComponent } from './common/components/menu-header/menu-header.component';
import { StyleManagerService } from './common/services/style-manager.service';
import { ScriptManagerService } from './common/services/script-manager.service';
import { NgSmartAdminService } from './common/services/ng-smart-admin.service';
import { FormsModule } from '@angular/forms';
import { Select2Component } from './demos/select2/select2.component';
import { SelectComponent } from './demos/select/select.component';
import { CheckboxComponent } from './demos/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInputComponent,
    MenuHeaderComponent,
    Select2Component,
    SelectComponent,
    CheckboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgFormsModule, FormsModule],
  providers: [StyleManagerService, ScriptManagerService, NgSmartAdminService],
  bootstrap: [AppComponent],
})
export class AppModule {}
