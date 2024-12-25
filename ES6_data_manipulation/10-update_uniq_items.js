function updateUniqueItems(map) {
    // Checks if the argument if a Map using instanceof
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }
    // Uses forEach to iterate through entries
    map.forEach((value, key) => {
    // for each entry where value is 1
        if (value === 1) {
    // Updates entry's value to 100 using map.set()
            map.set(key, 100);
        }
    });
    // Returns updated map
    return map;
}
  export default updateUniqueItems;
  