const parseNumber = (value: string) => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};
export default parseNumber;
