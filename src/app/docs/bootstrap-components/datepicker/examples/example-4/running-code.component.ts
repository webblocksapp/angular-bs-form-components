import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public loading: boolean = true;

  async apiRequest(): Promise<ExampleDto> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          birthDate: '1991-12-19',
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
