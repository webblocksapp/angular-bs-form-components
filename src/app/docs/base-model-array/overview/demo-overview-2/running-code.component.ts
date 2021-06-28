import { Component, OnInit } from '@angular/core';
import { BaseModelArray } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent implements OnInit {
  public modelConfigs = { highlightOnValid: true };
  public exampleModel: BaseModelArray = new BaseModelArray(ExampleDto, {
    configs: this.modelConfigs,
  });
  public output: string;
  public isValid: boolean;
  public maxNumberOfRecords: number = 3;
  public Array = Array;

  private sampleData: ExampleDto[] = [
    {
      email: 'test@gmail.com',
      city: 2,
      favoriteFoods: [3, 1],
    },
    {
      email: 'test@outlook.com',
      city: 4,
      favoriteFoods: [2, 4],
    },
    {
      email: 'test@hotmail.com',
      city: 1,
      favoriteFoods: [1, 5],
    },
  ];

  ngOnInit(): void {
    this.exampleModel.onEnterPress(() => this.submit());
  }

  public cities = [
    { value: 1, viewValue: 'Bogotá' },
    { value: 2, viewValue: 'Medellín' },
    { value: 3, viewValue: 'Cartagena' },
    { value: 4, viewValue: 'Santander' },
  ];

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Ice cream' },
    { value: 3, viewValue: 'Hamburger' },
    { value: 4, viewValue: 'Hot dog' },
  ];

  public addRecord(): void {
    this.exampleModel.add();
  }

  public deleteRecord(index: number): void {
    this.exampleModel.delete(index);
  }

  public populate(): void {
    this.isValid = undefined;
    this.exampleModel.fill(this.sampleData);
  }

  public clear(index?: number): void {
    this.isValid = undefined;
    this.exampleModel.reset(index);
  }

  public update(index?: number): void {
    this.exampleModel.find(index).fill(this.sampleData[index]);
  }

  public submit(): void {
    this.exampleModel.validate().then((validationResult) => {
      const { isValid, errors, validatedData } = validationResult;
      this.isValid = isValid;

      if (isValid) {
        //Send the data to backend
        this.output = JSON.stringify(validatedData, null, 2);
      } else {
        //(Optional) write your logic when data is invalid
        this.output = JSON.stringify(errors, null, 2);
      }
    });
  }

  ngOnDestroy(): void {
    this.exampleModel.unbindOnEnterPress();
  }
}
