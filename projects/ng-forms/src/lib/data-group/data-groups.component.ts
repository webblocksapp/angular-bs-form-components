import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
  HostBinding,
  OnDestroy,
} from '@angular/core';
import { DataGroupComponent } from './components/data-group.component';
import { BaseModel } from '../common/classes/base-model';
import { ValidationResult } from './types';
import { isNull } from '../common/utils';
import { BaseModelArray } from '../common/classes/base-model-array';
import { Subscription } from 'rxjs';
import { DataInputBase } from '../common/classes/data-input-base';

@Component({
  selector: 'data-groups',
  template: `
    <form (ngSubmit)="submitData()">
      <ng-content></ng-content>
    </form>
  `,
  styles: [
    `
      form {
        position: relative;
      }

      .d-table-row-group {
        display: table-row-group;
      }
    `,
  ],
})
export class DataGroupsComponent
  implements OnInit, AfterContentInit, OnDestroy {
  @HostBinding('class')
  @Input()
  class = 'd-block';

  @Input() noForm: boolean = false;
  @Input() model: any;
  @Input() group: string;
  @Input() enctype: string;
  @Input() multiple: boolean = false;
  @Input() highlightOnValid: boolean = false;
  @Input() autocomplete: boolean = false;

  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  @ContentChildren(DataGroupComponent, { descendants: true })
  dataGroupComponents: QueryList<DataGroupComponent>;

  private _model: Array<BaseModel>;
  private firstMount: boolean = false;
  private changes$: Subscription;
  private dataInputComponents: Array<DataInputBase>;

  ngOnInit(): void {
    this.initBaseModel();
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.inputModels();
    });
  }

  private initBaseModel(): void {
    if (this.model instanceof BaseModelArray) {
      this._model = this.model.get();
    }

    if (this.model instanceof BaseModel) {
      this._model = [this.model];
    }

    if (this.firstMount === false) {
      this.subscribeToModelChanges();
      this.firstMount = true;
    }
  }

  private subscribeToModelChanges(): void {
    const subject = this.model.getChange();
    this.changes$ = subject.subscribe(() => {
      if (this.firstMount === true) {
        setTimeout(() => {
          this.initBaseModel();
          this.inputModels();
        });
      }
    });
  }

  private unsubscribeToModelChanges(): void {
    this.changes$.unsubscribe();
  }

  private inputModels(): void {
    this._model.forEach((model, index) => {
      const dataGroupComponent = this.dataGroupComponents.toArray()[index];
      this.dataInputComponents = dataGroupComponent.getDataInputComponents();

      this.dataInputComponents.forEach((dataInputComponent) => {
        dataInputComponent.model = model;
        dataInputComponent.setError(model.getError(dataInputComponent.name));
        dataInputComponent.refresh();
      });
    });
  }

  private setModelsSubmitted(): void {
    this._model.forEach((model) => {
      model.setSubmitted(true);
    });
  }

  public submitData(): void {
    const groups = this.group !== undefined ? { groups: [this.group] } : {};
    this.submitEvent.emit(
      new Promise((resolve) => {
        this.model
          .validate(groups)
          .then((validationResult: ValidationResult) => {
            const { isValid, validatedData, errors } = validationResult;

            if (isValid) {
              if (this.enctype === 'multipart/form-data') {
                if (!Array.isArray(validationResult)) {
                  validationResult.validatedData = this.generateFormData(
                    validatedData,
                  );
                } else {
                  validationResult.validatedData.map((item) =>
                    this.generateFormData(item),
                  );
                }
              }

              resolve(validationResult);
            } else {
              resolve(validationResult);
            }

            this.setModelsSubmitted();
          });
      }),
    );
  }

  private generateFormData(validatedData): any {
    const formData = new FormData();

    if (!isNull(validatedData)) {
      const keys = Object.keys(validatedData);

      keys.forEach((key) => {
        formData.append(key, validatedData[key]);
      });
    }

    return formData;
  }

  private unsubscribeAll() {
    this.unsubscribeToModelChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
}
