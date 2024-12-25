function cleanSet(set, startString) {
  // Check if startString is valid
  // Returns empty if startString is undefined
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }
  // Process the set, convert set using Array.from()
  const filteredValues = Array.from(set)
    // Filter strings that start with startString with startsWith()
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    // map each value to remove startString with slice()
    .map((value) => value.slice(startString.length));
    // join all processed values with '-'
  return filteredValues.join('-');
}
export default cleanSet;
