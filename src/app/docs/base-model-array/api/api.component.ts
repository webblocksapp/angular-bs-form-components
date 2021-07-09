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
      name: 'public length: number',
      description: 'The <code>BaseModelArray</code> length',
    },
    {
      name: 'public minLength: number',
      description:
        'The min length of empty models to start by default the <code>BaseModelArray</code>',
    },
    {
      name: 'public maxLength: number',
      description:
        'The max length of models that can be stored inside the <code>BaseModelArray</code>',
    },
  ];

  public callableMethods: ApiTableData[] = [
    {
      name: 'public constructor(DtoClass: any, args?: BaseModelArgs)',
      description: 'Initializes the <code>BaseModelArray</code>.',
    },
    {
      name: 'public fill(data: Array&lt;any&gt, reset: boolean = true): void',
      description:
        'Fills the <code>BaseModelArray</code> with the passed data. If the reset argument is set to <code>false</code>, the array of models will be updated with the passed data.',
    },
    {
      name: 'public isFilled(index?: number): boolean',
      description:
        'Checks if the <code>BaseModelArray</code> is filled. By passing the <code>index</code> you can check if an specific model is filled.',
    },
    {
      name: 'public get(): Array&lt;BaseModel&gt;',
      description: 'Gets the array of <code>BaseModel</code> instances.',
    },
    {
      name: 'public getDtos(): Array&lt;any&gt;',
      description: 'Gets the array of the <code>dtos</code> from each model.',
    },
    {
      name: 'public find(index: number): BaseModel',
      description:
        'Get a model inside the <code>BaseModelArray</code> instance.',
    },
    {
      name: 'public add(data: any = null): void',
      description:
        'Appends a new <code>BaseModel</code> instance inside the <code>BaseModelArray</code>. It can be added with preloaded data.',
    },
    {
      name: 'public delete(index: number): void',
      description:
        'Deletes a <code>BaseModel</code> instance from the <code>BaseModelArray</code>.',
    },
    {
      name: 'public reset(index?: number, all: boolean = true): void',
      description:
        'Resets the <code>BaseModelArray</code> to its original state. If <code>all</code> is set to <code>false</code>, it will ignore the set <code>minLength</code>.',
    },
    {
      name: 'public validate(validatorOptions?: ValidatorOptions, index?: number): Promise&lt;ValidationResult&gt;',
      description:
        'Validates the <code>BaseModelArray</code>. Pass the <code>index</code> argument to validate a specific <code>BaseModel</code> instance inside the array.',
    },
    {
      name: 'public onEnterPress(callback: Function): void',
      description: `Subscribes to enter key press event. Must be implemented the model's <code>detectPressEnter</code> method inside a component that extends from <code>DataInputBase</code>.`,
    },
    {
      name: 'public unbindOnEnterPress(): void',
      description:
        'Unsubscribes from enter key press event. Commonly implemented when the component is unmounted.',
    },
  ];
}
