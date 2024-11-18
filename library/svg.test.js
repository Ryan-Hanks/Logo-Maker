const Svg = require('./svg');
const Square = require('./squares');
const Text = require('./text');

describe('Svg', () => {
    test('should render the correct svg code', () => {
        const svg = new Svg();
        const square = new Square();
        const text = new Text();

        square.setColor('black');
        text.setColor('white');

        svg.setShapeSvg(square);
        svg.setTextSvg(text, "abc")

        const svgRendered = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
${triangle.render()}
${text.render("abc")}
</svg>`;

        expect(svg.render()).toEqual(svgRendered);
    });
});