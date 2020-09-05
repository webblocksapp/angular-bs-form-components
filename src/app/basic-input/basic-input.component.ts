import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/class-validator';
import { Example1Dto, Example2Dto } from '../common/dtos';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styles: [``],
})
export class BasicInputComponent implements OnInit {
  constructor() {}

  public exampleModel1 = new BaseModel(Example1Dto);
  public exampleModel2 = [
    new BaseModel(Example2Dto),
    new BaseModel(Example2Dto),
  ];
  public isActive = false;

  ngOnInit(): void {
    setInterval(() => {
      this.isActive = !this.isActive;
    }, 5000);
  }

  example1(event) {
    console.log(this.exampleModel1, event);
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
