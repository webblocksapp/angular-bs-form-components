import { Component, OnInit } from '@angular/core';
import { BaseModel } from 'projects/ng-forms/src/public-api';
import { Example5Dto } from 'src/app/common/dtos/example5.dto';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements OnInit {
  public exampleModel5 = new BaseModel(Example5Dto);
  public disabled = false;
  public daysOfWeekDisabled;

  ngOnInit(): void {
    setTimeout(() => {
      this.daysOfWeekDisabled = [0, 1, 2, 3];
    });
    /*setInterval(() => {
      this.disabled = !this.disabled;
    }, 5000);*/
  }
}
