type Nested = {
  path: string;
  dtoClass: any;
  multiple?: boolean;
};

type Configs = {
  highlightOnValid?: boolean;
};

type BaseModelArgs = {
  nested?: Nested[];
  configs?: Configs;
};

type FieldMap = {
  name: string;
  touched?: boolean;
};

export { BaseModelArgs, Nested, FieldMap, Configs };
