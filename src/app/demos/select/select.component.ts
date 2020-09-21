import { AfterViewInit, Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
