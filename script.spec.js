describe('check the functions', () => {
  it('Should create a new array with forEach method', () => {
    expect(forEachExample(items, forEachCallbackFunction)).to.deep.equal(['item1', 'item2', 'item3', 'item1', 'item2', 'item3']);
  });
  it('Should create a new array with map method', () => {
    var checkArray = [2, 8, 18, 32];
    expect(mapExample(array1, mapCallbackFunction)).to.deep.equal(checkArray);
  });
  it('Should create a new array with filter method', () => {
    var checkArray2 = [3, 6, 9];
    expect(filterExample(arrayOfDigits, filterCallbackFunction)).to.deep.equal(checkArray2);
  });
  it('Should create a new array with every method', () => {
    expect(everyExample(array2, everyCallbackFunction)).to.equal(true);
  });
  it('Should create a new array with some method', () => {
    expect(someExample(array2, someCallbackFunction)).to.equal(true);
  });
  it('Should create a new array with find method', () => {
    expect(findExample(array2, findbackFunction)).to.equal(12);
  });
  it('Should create a new array with reduce method', () => {
    expect(reduceExample(arrayOfDigits, reducebackFunction)).to.equal(34);
  });

});