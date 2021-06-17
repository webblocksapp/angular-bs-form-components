import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { SelectOption } from '@webblocksapp/ng-bs4-form-components';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public cities: SelectOption[] = [
    { value: 1, viewValue: 'City of México' },
    { value: 2, viewValue: 'Guadalajara' },
    { value: 3, viewValue: 'Tijuana' },
  ];

  public genders: SelectOption[] = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public loading: boolean = true;

  async apiRequest(): Promise<ExampleDto> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          gender: 1,
          cities: [1, 3],
        });
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.simulateApiRequest();
  }

  simulateApiRequest(): void {
    this.loading = true;
    this.exampleModel.reset();
    this.apiRequest()
      .then((data) => {
        this.exampleModel.fill(data);
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
