import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <marker>Callable Properties</marker>
    <api-table [data]="callableProperties"></api-table>

    <marker>Callable Methods</marker>
    <api-table [data]="callableMethods"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public callableProperties: ApiTableData[] = [
    {
      name: 'public isValid: boolean',
      description:
        "Show if the model's data is valid. By default is <code>false</code>",
    },
    {
      name: 'public isSubmitted: boolean',
      description:
        "Show if the model's data has been submitted. By default is <code>false</code>",
    },
  ];

  public callableMethods: ApiTableData[] = [
    {
      name: 'public getDto(): any',
      description: "Get the current model's filled data.",
    },
    {
      name: 'public setValue(path: string, value: any): void',
      description:
        "Sets the value of the model's DTO attribute. The <code>path</code> is the model's DTO attribute and the <code>value</code> is the data with which will be filled.",
    },
    {
      name: 'public getValue(path: string): any',
      description:
        "Gets the value of the model's DTO attribute. The <code>path</code> is the model's DTO attribute.",
    },
    {
      name: 'public fill(data: any): void',
      description: "Fills the model's DTO with the provided data.",
    },
    {
      name: 'public validate(validatorOptions?: ValidatorOptions): Promise<ValidationResult>',
      description: "Validates all the model's DTO data.",
    },
    {
      name: 'public validateField(fieldName: string, validatorOptions?: ValidatorOptions): Promise<ValidationResult>',
      description: "Validates an specific attribute of the model's DTO data.",
    },
    {
      name: 'public reset(): void',
      description: "Clears all the model's DTO data.",
    },
    {
      name: 'public onEnterPress(callback: Function): void',
      description:
        'Subscribes to enter press event to trigger a callback function.',
    },
    {
      name: 'public unbindOnEnterPress(): void',
      description: 'Unsubscribes from enter press listener.',
    },
  ];
}
