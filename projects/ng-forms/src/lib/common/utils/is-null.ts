const isNull = (value: any) => {
  if (
    value === undefined ||
    value === '' ||
    value === null ||
    (typeof value === 'object' && Object.entries(value).length === 0)
  ) {
    return true;
  }

  return false;
};

export { isNull };
