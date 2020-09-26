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

  public optionGroup = [
    {
      group: 'Group 1',
      groupValues: [
        { value: '1', viewValue: 'Value 1', keyWords: 'test 1' },
        { value: '2', viewValue: 'Value 2' },
        { value: '3', viewValue: 'Value 3' },
        { value: '4', viewValue: 'Value 4' },
      ],
    },
    {
      group: 'Group 2',
      groupValues: [
        { value: '5', viewValue: 'Value 5' },
        { value: '6', viewValue: 'Value 6', keyWords: 'dog, cat' },
        { value: '7', viewValue: 'Value 7' },
        { value: '8', viewValue: 'Value 8' },
      ],
    },
    { value: '9', viewValue: 'Value 9' },
    { value: '10', viewValue: 'Value 10' },
    { value: '11', viewValue: 'Value 11' },
    { value: '12', viewValue: 'Value 12' },
  ];

  public optionGroupMax = [
    {
      group: 'Group 1',
      maxOptions: 2,
      groupValues: [
        { value: '1', viewValue: 'Value 1' },
        { value: '2', viewValue: 'Value 2' },
        { value: '3', viewValue: 'Value 3' },
        { value: '4', viewValue: 'Value 4' },
      ],
    },
    {
      group: 'Group 2',
      maxOptions: 3,
      groupValues: [
        { value: '5', viewValue: 'Value 5', class: 'test-class' },
        { value: '6', viewValue: 'Value 6', keyWords: 'dog, cat' },
        {
          value: '7',
          viewValue: 'Value 7',
          style: { 'background-color': '#fcf5de' },
        },
        { value: '8', viewValue: 'Value 8', title: 'Option 8 alias' },
      ],
    },
  ];

  public model = new BaseModel(Example3Dto);
  public disabled = true;

  public configs: any;

  ngOnInit(): void {
    setInterval(() => {
      this.disabled = !this.disabled;
    }, 5000);

    setTimeout(() => {
      this.options = [
        { value: '1', viewValue: 'Value 1' },
        { value: '2', viewValue: 'Value 2' },
        { value: '3', viewValue: 'Value 3' },
        { value: '4', viewValue: 'Value 4' },
        { value: '5', viewValue: 'Value 5' },
        { value: '6', viewValue: 'Value 6' },
        { value: '7', viewValue: 'Value 7' },
        { value: '8', viewValue: 'Value 8' },
      ];

      console.log('Updated options');
    }, 5000);

    setTimeout(() => {
      this.options = [];

      console.log('Empty options');
    }, 10000);

    this.configs = {
      maxOptionsText: function (numAll, numGroup) {
        return [
          numAll === 1
            ? 'Limite alcanzado ({n} item máximo)'
            : 'Limite alcanzado ({n} items máximo)',
          numGroup === 1
            ? 'Limite alcanzado ({n} item máximo)'
            : 'Limite alcanzado ({n} items máximo)',
        ];
      },
    };
  }

  ngAfterViewInit() {}
}
