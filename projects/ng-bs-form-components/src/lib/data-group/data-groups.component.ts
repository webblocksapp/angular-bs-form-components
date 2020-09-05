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
import { BaseModel, ValidationError } from '@webblocksapp/class-validator';
import {
  Error,
  ValidationResult,
  FormattedValidationResult,
  ModelMap,
} from './types';
import { capitalize } from '../common/utils/capitalize';

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

  private modelMap: Array<ModelMap>;

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
        new Promise((resolve) => {
          map.model.validate().then((validationResult: ValidationResult) => {
            const { isValid, validatedData, errors } = validationResult;
            if (isValid) {
              resolve(validationResult);
            } else {
              const formattedErrors: Error[] = this.formatErrors(errors);
              const formattedValidationResult: FormattedValidationResult = {
                isValid,
                validatedData,
                errors: formattedErrors,
              };

              resolve(formattedValidationResult);
            }
          });
        }),
      );
    });

    this.submit.emit(
      new Promise((resolve) => {
        const currentPromise =
          promises.length > 1 ? Promise.all(promises) : promises[0];

        currentPromise.then(
          (validationResults: FormattedValidationResult[]) => {
            this.manageErrors(validationResults);
            resolve(validationResults);
          },
        );
      }),
    );
  }

  formatErrors(errors: ValidationError[]): any {
    const formattedErrors = [];

    errors.forEach((error, index) => {
      const errorData: Error = {
        property: error.property,
        message: Object.values(error.constraints)[0],
      };

      formattedErrors[index] = errorData;
    });

    return formattedErrors;
  }

  manageErrors(validationResults: FormattedValidationResult[]): void {
    validationResults = !Array.isArray(validationResults)
      ? [validationResults]
      : validationResults;

    this.modelMap.forEach((map, index) => {
      const { inputDataComponents } = map;
      const { isValid, errors } = validationResults[index];

      if (isValid) {
        inputDataComponents.forEach((inputDataComponent) => {
          inputDataComponent.error = null;
        });
      } else {
        inputDataComponents.forEach((inputDataComponent) => {
          const { name } = inputDataComponent;
          const filteredError = errors.filter(
            (error) => error.property === name,
          );

          if (filteredError.length) {
            inputDataComponent.error = filteredError[0].message;
          } else {
            inputDataComponent.error = null;
          }

          inputDataComponent.component.error = capitalize(
            inputDataComponent.error,
          );
        });
      }
    });
  }
}
