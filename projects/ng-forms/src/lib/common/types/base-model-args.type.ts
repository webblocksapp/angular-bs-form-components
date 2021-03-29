type Nested = {
  path: string;
  dtoClass: any;
  multiple?: boolean;
};

type BaseModelArgs = {
  nested: Nested[];
};

export { BaseModelArgs, Nested };
