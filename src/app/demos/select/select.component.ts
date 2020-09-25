import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseModel } from 'projects/ng-forms/src/public-api';
import { Example3Dto } from '../../common/dtos';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit, AfterViewInit {
  public options = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public optionsWithDisabled = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3', disabled: true },
    { value: '4', viewValue: 'Value 4' },
  ];

  public model = new BaseModel(Example3Dto);

  ngOnInit(): void {
    /*this.model.fill({ city: 1 });

    setTimeout(() => {
      this.model.fill({ city: 3 });
    }, 5000);*/
  }

  ngAfterViewInit() {}
}
