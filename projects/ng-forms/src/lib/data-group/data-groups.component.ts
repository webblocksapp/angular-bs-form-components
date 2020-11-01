import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import { DataGroupComponent } from './components/data-group.component';
import { ValidationError } from '@webblocksapp/class-validator';
import { BaseModel } from '../common/classes/base-model';
import {
  Error,
  ValidationResult,
  FormattedValidationResult,
  ModelMap,
  DataInputComponent,
} from './types';
import { capitalize, isNull } from '../common/utils';

@Component({
  selector: 'data-groups',
  template: `
    <form (ngSubmit)="submitData()">
      <ng-content></ng-content>
    </form>
  `,
})
export class DataGroupsComponent implements OnInit, AfterContentInit {
  @Input() class: string;
  @Input() model: Array<BaseModel>;
  @Input() group: string;
  @Input() enctype: string;
  @Input() multiple = false;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  @ContentChildren(DataGroupComponent)
  dataGroupComponents: QueryList<DataGroupComponent>;

  private modelMap: Array<ModelMap>;

  constructor() {}

  ngOnInit(): void {
    this.initBaseModel();
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.initModelMap();
      this.listenDataGroupsListChanges();
      this.listenDataInputsListChanges();
    });
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
      this.modelMap.push({ model, dataInputComponents: [] });

      const dataGroupComponent = this.dataGroupComponents.toArray()[index];
      const dataInputComponents = dataGroupComponent.getDataInputComponents();

      dataInputComponents.forEach((dataInputComponent, i) => {
        this.modelMap[index].dataInputComponents[i] = {
          component: dataInputComponent,
          name: dataInputComponent.name,
        };
      });
    });
  }

  applyModelMap(): void {
    this.modelMap.forEach((map) => {
      map.dataInputComponents.forEach((dataInputComponent) => {
        const { name } = dataInputComponent.component;
        const errors = this.formatErrors(map.model.getErrors());

        dataInputComponent.component.model = map.model;
        dataInputComponent.component.fillModel(map.model.getValue(name));
        dataInputComponent.component.refresh();

        this.setDataInputComponentError(dataInputComponent, errors);
      });
    });
  }

  listenDataGroupsListChanges(): void {
    this.dataGroupComponents.changes.subscribe(() => {
      setTimeout(() => {
        this.initModelMap();
      });
    });
  }

  listenDataInputsListChanges(): void {
    this.dataGroupComponents.forEach((dataGroupComponent) => {
      dataGroupComponent.dataInputs.changes.subscribe(() => {
        dataGroupComponent.loadDataInputComponents();
        setTimeout(() => {
          this.initModelMap();
        });
      });
    });
  }

  submitData(): void {
    const promises = [];
    const groups = this.group !== undefined ? { groups: [this.group] } : {};

    this.modelMap.forEach((map) => {
      promises.push(
        new Promise((resolve) => {
          map.model
            .validate(groups)
            .then((validationResult: ValidationResult) => {
              const { isValid, errors } = validationResult;
              if (isValid) {
                resolve(validationResult);
              } else {
                const formattedErrors: Error[] = this.formatErrors(errors);
                const formattedValidationResult: FormattedValidationResult = {
                  isValid,
                  errors: formattedErrors,
                };

                resolve(formattedValidationResult);
              }
            });
        }),
      );
    });

    this.submitEvent.emit(
      new Promise((resolve) => {
        const currentPromise =
          promises.length > 1 ? Promise.all(promises) : promises[0];

        currentPromise.then((validationResult) => {
          this.manageErrors(validationResult);

          if (this.enctype === 'multipart/form-data') {
            if (!Array.isArray(validationResult)) {
              (validationResult as any).validatedData = this.generateFormData(
                validationResult.validatedData,
              );
            } else {
              (validationResult as FormattedValidationResult[]).forEach(
                (item) => {
                  item.validatedData = this.generateFormData(
                    item.validatedData,
                  );
                },
              );
            }
          }

          validationResult = this.parseValidationResult(validationResult);

          resolve(validationResult);
        });
      }),
    );
  }

  parseValidationResult(validationResult): FormattedValidationResult {
    if (this.multiple === true && !Array.isArray(validationResult)) {
      validationResult = [validationResult];
    }

    if (Array.isArray(validationResult)) {
      validationResult = this.groupMultipleValidationResult(validationResult);
    }

    return validationResult;
  }

  groupMultipleValidationResult(validationResult): FormattedValidationResult {
    const groupedMultipleValidationResults: FormattedValidationResult = {
      isValid: true,
    };

    validationResult.forEach((validationResultItem) => {
      if (groupedMultipleValidationResults.isValid) {
        groupedMultipleValidationResults.isValid = validationResultItem.isValid;
      }

      if (validationResultItem.validatedData !== undefined) {
        if (groupedMultipleValidationResults.validatedData === undefined) {
          groupedMultipleValidationResults.validatedData = [];
        }

        groupedMultipleValidationResults.validatedData.push(
          validationResultItem.validatedData,
        );
      }

      if (validationResultItem.errors !== undefined) {
        if (groupedMultipleValidationResults.errors === undefined) {
          groupedMultipleValidationResults.errors = [];
        }

        groupedMultipleValidationResults.errors.push(
          validationResultItem.errors,
        );
      }
    });

    return groupedMultipleValidationResults;
  }

  generateFormData(validatedData): any {
    const formData = new FormData();

    if (!isNull(validatedData)) {
      const keys = Object.keys(validatedData);

      keys.forEach((key) => {
        formData.append(key, validatedData[key]);
      });
    }

    return formData;
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
      const { dataInputComponents } = map;
      const { isValid, errors } = validationResults[index];

      if (isValid) {
        dataInputComponents.forEach((dataInputComponent) => {
          dataInputComponent.component.error = null;
        });
      } else {
        dataInputComponents.forEach((dataInputComponent) => {
          this.setDataInputComponentError(dataInputComponent, errors);
        });
      }
    });
  }

  setDataInputComponentError(
    dataInputComponent: DataInputComponent,
    errors: any,
  ): void {
    const { name } = dataInputComponent;
    const filteredError = errors.filter((error) => error.property === name);
    const errorMessage = filteredError.length ? filteredError[0].message : null;

    dataInputComponent.component.error = capitalize(errorMessage);
    dataInputComponent.component.refresh();
  }
}
