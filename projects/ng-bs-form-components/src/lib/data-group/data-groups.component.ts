import {
  Component,
  OnInit,
  ContentChild,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import { DataGroupComponent } from './components/data-group.component';
import { DataFooterComponent } from './components/data-footer.component';
import { BaseModel } from '@webblocksapp/class-validator';

@Component({
  selector: 'data-groups',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class DataGroupsComponent implements OnInit, AfterContentInit {
  @Input() class: string;
  @Input() model: Array<BaseModel>;

  @Output() submit: EventEmitter<any> = new EventEmitter();

  @ContentChildren(DataGroupComponent)
  dataGroupComponents: QueryList<DataGroupComponent>;

  @ContentChild(DataFooterComponent)
  dataFooterComponent: DataFooterComponent;

  private modelMap: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.initBaseModel();
  }

  ngAfterContentInit(): void {
    this.initModelMap();
    this.initSubmitDataButtons();
    this.listenQueryListChanges();
  }

  initBaseModel(): void {
    if (!Array.isArray(this.model)) this.model = [this.model];
  }

  initModelMap(): void {
    this.generateModelMap();
    this.applyModelMap();
  }

  generateModelMap(): void {
    this.modelMap = [];
    this.model.forEach((model, index) => {
      this.modelMap.push({ model, inputDataComponents: [] });

      const dataGroupComponent = this.dataGroupComponents.toArray()[index];
      const inputDataComponents = dataGroupComponent.getInputDataComponents();

      inputDataComponents.forEach((inputDataComponent, i) => {
        this.modelMap[index].inputDataComponents[i] = {
          component: inputDataComponent,
          name: inputDataComponent.name,
          error: null,
        };
      });
    });
  }

  applyModelMap(): void {
    this.modelMap.forEach((map) => {
      map.inputDataComponents.forEach((inputDataComponent) => {
        inputDataComponent.component.model = map.model;

        if (!inputDataComponent.component.error)
          inputDataComponent.component.error = inputDataComponent.error;
      });
    });
  }

  initSubmitDataButtons(): void {
    const submitDataButtons = this.dataFooterComponent.getSubmitButtonsNativeElements();

    submitDataButtons.forEach((submitDataButton) => {
      submitDataButton.addEventListener('click', () => {
        this.submitData();
      });
    });
  }

  listenQueryListChanges(): void {
    this.dataGroupComponents.forEach((dataGroupComponent) => {
      dataGroupComponent.dataInputs.changes.subscribe(() => {
        dataGroupComponent.loadInputDataComponents();
        setTimeout(() => {
          this.initModelMap();
        });
      });
    });
  }

  submitData(): void {
    const promises = [];

    this.modelMap.forEach((map) => {
      promises.push(
        new Promise((resolve, reject) => {
          map.model
            .validate()
            .then((validatedData) => {
              resolve({ isValid: true, data: validatedData, errors: null });
            })
            .catch((errors) => {
              reject({ isValid: true, data: {}, errors });
            });
        }),
      );
    });

    this.submit.emit(
      new Promise((resolve, reject) => {
        Promise.all(promises)
          .then((validatedData) => {
            resolve(validatedData);
          })
          .catch((errors) => {
            reject(errors);
          });
      }),
    );
  }
}
