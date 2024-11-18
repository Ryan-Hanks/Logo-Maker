const Triangle = require('./triangle');

describe('Triangle', () => {
    test('should render a triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue')

    const expectedTriangle = `<polygon points="150,25 75,175 225,175" fill="blue" />`;
    expect(triangle.render()).toEqual(expectedTriangle);
    })
})