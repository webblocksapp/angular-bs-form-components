const setValueByPath = (object, path, value): void => {
  const arrayPath = path.split('.');
  let iteratedObject = object;

  arrayPath.forEach((pathItem, index) => {
    if (index === arrayPath.length - 1) {
      iteratedObject[pathItem] = value;
    } else {
      iteratedObject = iteratedObject[pathItem];
    }
  });
};

export { setValueByPath };
