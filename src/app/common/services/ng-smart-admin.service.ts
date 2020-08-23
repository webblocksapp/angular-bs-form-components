import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgSmartAdminService {
  private smartAdminAppConfig: any;
  private smartAdminApp: any;

  initNavigation() {
    this.loadDefaults();
    this.buildNavigation();
    this.listFilter();
  }

  refreshDom() {
    setTimeout(() => {
      this.smartAdminAppConfig = window['myapp_config'];
      this.smartAdminApp = window['initApp'];

      this.loadDefaults();
      this.domReadyMisc();
      this.appForms();
    }, 1000);
  }

  private loadDefaults(): void {
    this.updateAppConfig();
    this.addDeviceType();
    this.detectBrowserType();
    this.mobileCheckActivation();
  }

  private updateAppConfig(): void {
    this.smartAdminApp.updateConfigs();
  }

  private addDeviceType(): string {
    return this.smartAdminApp.addDeviceType();
  }

  private detectBrowserType(): string {
    return this.smartAdminApp.detectBrowserType();
  }

  private mobileCheckActivation(): boolean {
    return this.smartAdminApp.mobileCheckActivation();
  }

  private buildNavigation(): void {
    this.smartAdminApp.buildNavigation(this.smartAdminAppConfig.navHooks);
  }

  private listFilter(): void {
    this.smartAdminApp.listFilter(
      this.smartAdminAppConfig.navHooks,
      this.smartAdminAppConfig.navFilterInput,
      this.smartAdminAppConfig.navAnchor,
    );
  }

  private domReadyMisc(): void {
    this.smartAdminApp.domReadyMisc();
  }

  private appForms(): void {
    this.smartAdminApp.appForms('.input-group', 'has-length', 'has-disabled');
  }
}
