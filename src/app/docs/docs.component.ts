import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styles: [
    `
      :host > .sidebar {
        width: 240px;
      }

      :host > .main {
        width: calc(100% - 240px);
      }
    `,
  ],
})
export class DocsComponent {
  @HostBinding('class') class = 'row flex-grow-1';
}
