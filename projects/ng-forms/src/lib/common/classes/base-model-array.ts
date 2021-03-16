import { BehaviorSubject } from 'rxjs';
import { BaseModel } from './base-model';

export class BaseModelArray {
  private dtoClass: any;
  private array: Array<BaseModel> = [];
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );

  constructor(DtoClass: any) {
    this.dtoClass = DtoClass;
    this.array = [new BaseModel(this.dtoClass)];
  }

  public fill(data: Array<any>): void {
    const array = [];
    data.forEach((item: any) => {
      const model = new BaseModel(this.dtoClass);
      model.fill(item);
      array.push(model);
    });

    this.array = array;
    this.emitChange();
  }

  public get(): Array<BaseModel> {
    return this.array;
  }

  public find(index: number): BaseModel {
    return this.array[index];
  }

  public add(data: any = null): void {
    const model = new BaseModel(this.dtoClass);
    if (data) {
      model.fill(data);
    }
    this.array.push(model);
    this.emitChange();
  }

  public delete(index: number): void {
    this.array = this.array.filter(
      (item) => this.array.indexOf(item) !== index,
    );
    this.emitChange();
  }

  public count(): number {
    return this.array.length;
  }

  public reset(index: number = undefined): void {
    if (index === undefined) {
      this.array.forEach((model) => {
        model.reset();
      });
    } else {
      this.array[index].reset();
    }

    this.emitChange();
  }

  public emitChange(): void {
    const currentValue = this.change.getValue();
    this.change.next(!currentValue);
  }

  public getChange(): BehaviorSubject<Boolean> {
    return this.change;
  }
}
