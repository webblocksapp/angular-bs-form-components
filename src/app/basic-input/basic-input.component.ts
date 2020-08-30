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
  public exampleModel2 = new BaseModel(Example2Dto);

  ngOnInit(): void {}

  example1(event) {
    console.log(this.exampleModel1, event);
  }

  onClick(event) {
    console.log('Element clicked with value:', event.target.value);
  }

  onFocusout(event) {
    console.log('Element focused out with value:', event.target.value);
  }
}
