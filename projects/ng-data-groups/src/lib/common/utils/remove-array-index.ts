const removeArrayIndex = (string: string): string => {
  return string.replace(/\[.\]/g, '');
};

export { removeArrayIndex };
