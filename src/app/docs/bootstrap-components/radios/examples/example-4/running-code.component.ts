import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public favoriteFoods = [
    { id: 1, name: 'Pizza', status: true },
    { id: 2, name: 'Hamburger', status: true },
    { id: 3, name: 'Ice cream', status: false },
    { id: 4, name: 'Chinese rice', status: true },
  ];
}
