import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styles: [``],
})
export class BasicInputComponent implements OnInit {
  constructor() {}
  public myModel: any = {
    fieldValue: '',
  };

  ngOnInit(): void {}

  onKeyup(event) {
    console.log(this.myModel);
  }
}
