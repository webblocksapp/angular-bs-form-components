const getLastArrayIndex = (string: string): string => {
  return string.match(/\[.\]/g)?.pop()?.replace('[', '')?.replace(']', '');
};

export { getLastArrayIndex };
