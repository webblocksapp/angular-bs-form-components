import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/class-validator';
import { Example1Dto } from '../common/dtos';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styles: [``],
})
export class BasicInputComponent implements OnInit {
  constructor() {}

  public exampleModel1 = new BaseModel(Example1Dto);

  ngOnInit(): void {}

  example1(event) {
    console.log(this.exampleModel1);
  }

  onClick(event) {
    console.log('Element clicked with value:', event.target.value);
  }

  onFocusout(event) {
    console.log('Element focused out with value:', event.target.value);
  }
}
