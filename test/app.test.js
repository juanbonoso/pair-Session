describe('Test Suite', () => {
  it('should pass without problems', () => {
    const functionToTest = () => 2 + 2;
    expect(functionToTest()).toEqual(4);
  });

  it('should fail', () => {
    const functionToTest = () => 2 + 2;
    expect(functionToTest()).toEqual(5);
  });
});
