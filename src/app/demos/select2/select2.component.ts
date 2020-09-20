import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/class-validator';
import { Example3Dto } from '../../common/dtos';

@Component({
  selector: 'app-select',
  templateUrl: './select2.component.html',
  styles: [``],
})
export class Select2Component implements OnInit {
  public theme: string;
  public disabled = true;

  public options = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public optionsChanging = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3', disabled: false },
    { value: '4', viewValue: 'Value 4' },
  ];

  public optionGroup = [
    {
      group: 'Group 1',
      groupValues: [
        { value: '1', viewValue: 'Value 1' },
        { value: '2', viewValue: 'Value 2' },
        { value: '3', viewValue: 'Value 3' },
        { value: '4', viewValue: 'Value 4' },
      ],
    },
    {
      group: 'Group 2',
      groupValues: [
        { value: '5', viewValue: 'Value 5' },
        { value: '6', viewValue: 'Value 6' },
        { value: '7', viewValue: 'Value 7' },
        { value: '8', viewValue: 'Value 8' },
      ],
    },
    { value: '9', viewValue: 'Value 9' },
    { value: '10', viewValue: 'Value 10' },
    { value: '11', viewValue: 'Value 11' },
    { value: '12', viewValue: 'Value 12' },
  ];

  public optionsWithDisabled = [
    { value: '1', viewValue: 'Value 1', disabled: true },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public multipleSelectOptions = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public example3Model = new BaseModel(Example3Dto);

  constructor() {}

  ngOnInit(): void {
    this.example3Model.fill({ country: 1 });
    this.example3Model.fill({ cities: [1, 2] });

    const theme = localStorage.getItem('theme');
    if (theme === 'default') this.theme = 'bootstrap';

    setInterval(() => {
      this.disabled = !this.disabled;

      if (!this.disabled) {
        this.optionsChanging = [
          { value: '1', viewValue: 'Value 1' },
          { value: '2', viewValue: 'Value 2' },
          { value: '3', viewValue: 'Value 3', disabled: true },
          { value: '4', viewValue: 'Value 4' },
        ];
      } else {
        this.optionsChanging = [
          { value: '1', viewValue: 'Value 1' },
          { value: '2', viewValue: 'Value 2' },
          { value: '3', viewValue: 'Value 3' },
          { value: '4', viewValue: 'Value 4' },
        ];
      }
    }, 5000);
  }

  onChange($event) {
    console.log('On change event:', $event);
  }

  onSelected($event) {
    console.log('On selected event:', $event);
  }

  onSubmit(event) {
    event
      .then((response) => {
        console.log(response);
      })
      .catch(({ errors }) => {
        console.log(errors);
      });
  }
}
