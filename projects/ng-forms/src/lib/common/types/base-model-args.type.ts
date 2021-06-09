type Nested = {
  path: string;
  dtoClass: any;
  multiple?: boolean;
};

type BaseModelArgs = {
  nested: Nested[];
};

type FieldMap = {
  name: string;
  touched: boolean;
};

export { BaseModelArgs, Nested, FieldMap };
