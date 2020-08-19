import { Injectable } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import { ScriptManagerService } from './script-manager.service';

@Injectable()
export class ThemeService {
  private defaultTheme = {
    styles: ['assets/bootstrap/css/bootstrap.min.css'],
    scripts: [
      'assets/jquery/jquery.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
    ],
  };

  private smartAdminTheme = {
    styles: [
      'assets/smart-admin/css/fa-brands.css',
      'assets/smart-admin/css/fa-duotone.css',
      'assets/smart-admin/css/fa-regular.css',
      'assets/smart-admin/css/fa-solid.css',
      'assets/smart-admin/css/vendors.bundle.css',
      'assets/smart-admin/css/app.bundle.css',
    ],
    scripts: ['assets/smart-admin/js/vendors-and-app.bundle.js'],
  };

  constructor(
    private styleManager: StyleManagerService,
    private scriptManager: ScriptManagerService,
  ) {}

  setTheme(themeToSet) {
    switch (themeToSet) {
      case 'default':
        this.setBootstrapTheme();
        break;
      case 'smartAdmin':
        this.setSmartAdminTheme();
        break;
      default:
        break;
    }
  }

  setBootstrapTheme(): void {
    this.defaultTheme.styles.forEach((style, i) => {
      this.styleManager.setStyle('default' + i, style);
    });

    this.defaultTheme.scripts.forEach((script, i) => {
      this.scriptManager.setScript('default' + i, script);
    });

    this.removeSmartAdminTheme();
  }

  setSmartAdminTheme(): void {
    this.smartAdminTheme.styles.forEach((style, i) => {
      this.styleManager.setStyle('smartAdmin' + i, style);
    });

    this.smartAdminTheme.scripts.forEach((script, i) => {
      this.scriptManager.setScript('smartAdmin' + i, script);
    });

    this.removeBootstrapTheme();
  }

  removeBootstrapTheme(): void {
    for (let i = 0; i < this.defaultTheme.styles.length; i++) {
      this.styleManager.removeStyle('default' + i);
    }

    for (let i = 0; i < this.defaultTheme.scripts.length; i++) {
      this.scriptManager.removeScript('default' + i);
    }
  }

  removeSmartAdminTheme(): void {
    for (let i = 0; i < this.smartAdminTheme.styles.length; i++) {
      this.styleManager.removeStyle('smartAdmin' + i);
    }

    for (let i = 0; i < this.smartAdminTheme.scripts.length; i++) {
      this.scriptManager.removeScript('smartAdmin' + i);
    }
  }
}
