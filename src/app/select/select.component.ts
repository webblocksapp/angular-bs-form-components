import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/class-validator';
import { Example3Dto } from '../common/dtos';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: [``],
})
export class SelectComponent implements OnInit {
  public theme: string;
  public options = [
    { value: '1', viewValue: 'Value 1' },
    { value: '2', viewValue: 'Value 2' },
    { value: '3', viewValue: 'Value 3' },
    { value: '4', viewValue: 'Value 4' },
  ];

  public example3Model = new BaseModel(Example3Dto);

  constructor() {}

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'default') this.theme = 'bootstrap';
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
