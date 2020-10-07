import { Component, OnInit } from '@angular/core';
import { BaseModel } from 'projects/ng-forms/src/public-api';
import { Example4Dto } from '../../common/dtos/example4.dto';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
})
export class FileComponent implements OnInit {
  public model = new BaseModel(Example4Dto);

  ngOnInit(): void {}
}
