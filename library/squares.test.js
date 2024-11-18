const Square = require('./square');

describe('Square', () => {
    test('should render a square', () => {
    const square = new Square();
    const shapeColor = square.setColor('blue');

    const expectedSquare = `<rect x="75" y="25" width="175" height="175" fill="blue" />`;
    expect(square.render()).toEqual(expectedSquare);
    })
})