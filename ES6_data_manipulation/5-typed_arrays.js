function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);
    // Create a DataView to manipulate the buffer
    const dataview = new DataView(buffer);
    // Check if position is within range
    if (position >= length) {
        throw new Error('Position outside range');
    }
    // Set the Int8 value at the specified position
    dataview.setInt8(position, value);
    return dataview;
}
export default createInt8TypedArray;
