const parseValue = (value: any) => {
  if (value === 'true' || value === true) {
    return true;
  }

  if (value === 'false' || value === false) {
    return false;
  }

  if (value === '') {
    return '';
  }

  if (value === null) {
    return null;
  }

  return isNaN(value) ? value : +value;
};

export default parseValue;
export { parseValue };
