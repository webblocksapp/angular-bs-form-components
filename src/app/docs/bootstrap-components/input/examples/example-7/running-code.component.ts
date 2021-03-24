import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { DetailDto } from './detail.dto';
import { GuestDto } from './guest.dto';
import { HostDto } from './host.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public userModel: BaseModel = new BaseModel(HostDto, {
    nested: [
      { path: 'guest', dtoClass: GuestDto },
      { path: 'guest.detail', dtoClass: DetailDto },
    ],
  });
}
