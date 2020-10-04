import { Component, OnInit } from '@angular/core';
import { BaseModel } from 'projects/ng-forms/src/public-api';
import { Example3Dto } from 'src/app/common/dtos';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {
  constructor() {}

  public disabled = false;
  public options = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2', disabled: true },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public model = new BaseModel(Example3Dto);

  ngOnInit(): void {
    /*setInterval(() => {
      this.disabled = !this.disabled;

      console.log('disabled changed', this.disabled);
    }, 5000);*/

    setTimeout(() => {
      this.model.setValue('country', 2);
    }, 5000);
  }
}
