import { Component, OnInit } from '@angular/core';
import { Example1Dto, Example2Dto } from '../../common/dtos';
import { BaseModel } from 'projects/ng-forms/src/public-api';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styles: [``],
})
export class BasicInputComponent implements OnInit {
  constructor() {}

  public exampleModel1: BaseModel = new BaseModel(Example1Dto);

  public exampleModel2: Array<BaseModel> = [
    new BaseModel(Example2Dto),
    new BaseModel(Example2Dto),
  ];
  public isActive = false;
  public group = 'only-text';

  ngOnInit(): void {
    setInterval(() => {
      this.isActive = !this.isActive;
      this.group = this.group === 'only-text' ? 'default' : 'only-text';
      console.log(this.group);
    }, 5000);
  }

  click(event) {
    console.log('Element clicked with value:', event.target.value);
  }

  focusout(event) {
    console.log('Element focused out with value:', event.target.value);
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
