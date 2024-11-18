const Circle = require('./circles');

describe('Circle', () => {
    test('should render a circle', () => {
    const circle = new Circle();
    const shapeColor = circle.setColor('blue');

    const expectedCircle = `<circle cx="150" cy="100" r="80" fill="blue" />`;
    expect(circle.render()).toEqual(expectedCircle);
    })
})