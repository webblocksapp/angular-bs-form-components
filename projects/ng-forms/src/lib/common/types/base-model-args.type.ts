type Nested = {
  path: string;
  dtoClass: any;
};

type BaseModelArgs = {
  nested: Nested[];
};

export { BaseModelArgs, Nested };
